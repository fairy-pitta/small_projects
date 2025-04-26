import requests
from bs4 import BeautifulSoup
import csv
import time

headers = {
    "User-Agent": "Mozilla/5.0"
}

# ========================
# Step 1: 一覧ページからリンク取得
# ========================
base_url = "https://www.jolnet.com/transfer/page/{}"
start_page = 1
max_pages = 36 # 必要に応じて増やす
all_links = []

for page in range(start_page, max_pages + 1):
    url = base_url.format(page) if page > 1 else "https://www.jolnet.com/transfer/"
    print(f"Fetching: {url}")
    
    res = requests.get(url, headers=headers)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "html.parser")

    # お知らせリンク抽出
    items = soup.select("div.latest ul li a")
    for a in items:
        href = a.get("href")
        if href and "/transfer/" in href:
            all_links.append(href)

# 重複除去
all_links = list(set(all_links))
print(f"\n🔗 全{len(all_links)}件の詳細ページURLを取得しました。\n")

# ========================
# Step 2: 各詳細ページをスクレイピング（修正済み）
# ========================
results = []

for idx, url in enumerate(all_links, 1):
    print(f"Scraping ({idx}/{len(all_links)}): {url}")
    try:
        res = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(res.text, "html.parser")

        row_data = {"URL": url}

        # ★ 学校名の抽出
        h2_title = soup.find("h2", class_="title")
        if h2_title:
            full_title = h2_title.get_text(strip=True)
            school_name = full_title.split()[-1]  # 最後の単語だけ取り出す
            row_data["学校名"] = school_name
            row_data["ページタイトル"] = full_title

        # ★ テーブル抽出
        table = soup.find("table", class_="whiteTable")
        if table:
            for row in table.find_all("tr"):
                th = row.find("th")
                td = row.find("td")
                if th and td:
                    key = th.get_text(strip=True)
                    value = td.get_text(strip=True)
                    row_data[key] = value

        results.append(row_data)

    except Exception as e:
        print(f"❌ Error at {url}: {e}")
    
    time.sleep(0.25)
# ========================
# Step 3: CSVに保存
# ========================

# 手動で指定する基本カラム順
keys = [
    "学校名",
    "学年",
    "出願期間",
    "試験日",
    "試験実施期間",
    "発表日",
    "入試科目",
    "面接",
    "募集人員",
    "URL",
    "ページタイトル",
    "所在地",
    "連絡先",
    "詳細",
]

# ✅ 未知のカラム（上記以外）を末尾に追加
known_keys = set(keys)
extra_keys = set()

for r in results:
    for k in r.keys():
        if k not in known_keys:
            extra_keys.add(k)

# 追加するキーをアルファベット順にする（任意）
keys += sorted(extra_keys)

# ファイル書き出し
with open("jolnet_transfer_data.csv", "w", encoding="utf-8", newline='') as f:
    writer = csv.DictWriter(f, fieldnames=keys)
    writer.writeheader()
    writer.writerows(results)

print("\n✅ 完了！jolnet_transfer_data.csv に保存しました。")