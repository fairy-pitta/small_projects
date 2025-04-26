import pandas as pd

# 入出力ファイル
INPUT_CSV = "jolnet_transfer_data.csv"
OUTPUT_EXCEL = "jolnet_transfer_data_sorted.xlsx"

# 地域マッピング辞書
pref_to_region = {
    "北海道": "北海道地方",
    "青森県": "東北地方", "岩手県": "東北地方", "宮城県": "東北地方", "秋田県": "東北地方",
    "山形県": "東北地方", "福島県": "東北地方",
    "茨城県": "関東地方", "栃木県": "関東地方", "群馬県": "関東地方", "埼玉県": "関東地方",
    "千葉県": "関東地方", "東京都": "関東地方", "神奈川県": "関東地方",
    "新潟県": "中部地方", "富山県": "中部地方", "石川県": "中部地方", "福井県": "中部地方",
    "山梨県": "中部地方", "長野県": "中部地方", "岐阜県": "中部地方", "静岡県": "中部地方", "愛知県": "中部地方",
    "三重県": "近畿地方", "滋賀県": "近畿地方", "京都府": "近畿地方", "大阪府": "近畿地方",
    "兵庫県": "近畿地方", "奈良県": "近畿地方", "和歌山県": "近畿地方",
    "鳥取県": "中国地方", "島根県": "中国地方", "岡山県": "中国地方", "広島県": "中国地方", "山口県": "中国地方",
    "徳島県": "四国地方", "香川県": "四国地方", "愛媛県": "四国地方", "高知県": "四国地方",
    "福岡県": "九州地方", "佐賀県": "九州地方", "長崎県": "九州地方", "熊本県": "九州地方",
    "大分県": "九州地方", "宮崎県": "九州地方", "鹿児島県": "九州地方", "沖縄県": "沖縄地方"
}

# 地域の並び順（北から南＋海外＋不明）
region_order = [
    "北海道地方", "東北地方", "関東地方", "中部地方",
    "近畿地方", "中国地方", "四国地方", "九州地方",
    "沖縄地方", "海外地方", "不明"
]

# CSV読み込み
df = pd.read_csv(INPUT_CSV)

# ▼ 富士見丘の所在地を補完（NaNや空文字に対応）
df.loc[
    df["学校名"].str.contains("富士見丘", na=False) & df["所在地"].fillna("").eq(""),
    "所在地"
] = "東京都渋谷区"

# ▼ 都道府県と地域を抽出
def extract_pref_and_region(address):
    for pref in pref_to_region:
        if isinstance(address, str) and pref in address:
            return pref, pref_to_region[pref]
    return "", "不明"

df[["都道府県", "地域"]] = df["所在地"].apply(lambda x: pd.Series(extract_pref_and_region(x)))

# ▼ 帝京ロンドン学園高等部の地域を海外地方に設定
df.loc[
    df["学校名"] == "帝京ロンドン学園高等部",
    ["都道府県", "地域"]
] = pd.Series(["海外", "海外地方"])

# ▼ 地域をカテゴリ型に（北→南の順で並び替え）
df["地域"] = pd.Categorical(df["地域"], categories=region_order, ordered=True)

# ▼ 学校区分の追加（ページタイトルの2単語目の先頭が「中」→中学校、それ以外→高等学校）
def determine_school_type(title):
    if pd.isna(title):
        return "不明"
    parts = str(title).split()
    if len(parts) >= 2 and parts[1].startswith("中"):
        return "中学校"
    return "高等学校"

df["学校区分"] = df["ページタイトル"].apply(determine_school_type)

# 並び替え：地域 → 都道府県 → 学校名
df_sorted = df.sort_values(by=["地域", "都道府県", "学校名"], na_position="last")

# カラム順調整：地域・都道府県・学校区分を先頭に
ordered_cols = ["地域", "都道府県", "学校区分"] + [col for col in df_sorted.columns if col not in ["地域", "都道府県", "学校区分"]]
df_sorted = df_sorted[ordered_cols]

# Excel出力（中学校と高等学校を別シートに保存）
with pd.ExcelWriter(OUTPUT_EXCEL, engine="openpyxl") as writer:
    df_sorted[df_sorted["学校区分"] == "中学校"].to_excel(writer, sheet_name="中学校", index=False)
    df_sorted[df_sorted["学校区分"] == "高等学校"].to_excel(writer, sheet_name="高等学校", index=False)

print(f"✅ Excel出力完了：{OUTPUT_EXCEL} に中学校、高等学校として保存しました。")