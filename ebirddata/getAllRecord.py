import requests
import time
import csv
import os
from datetime import datetime, timedelta

# 設定
api_key = "5ik656tjh2us"
region_code = "SG"
start_date = datetime(2000, 1, 1)
end_date = datetime.now()
output_file = "sg_ebird_observations.csv"

# 既存の観察済み日付をロード（obsDtで判断）
existing_dates = set()
if os.path.exists(output_file):
    with open(output_file, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if "obsDt" in row:
                existing_dates.add(row["obsDt"])

# 出力ファイルがなければヘッダーを書き込み
need_header = not os.path.exists(output_file)
if need_header:
    with open(output_file, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([
            "speciesCode", "comName", "sciName", "obsDt", "howMany", "lat", "lng", "locationName",
            "locationID", "obsValid", "obsReviewed", "userDisplayName", "subnational1Name", "subnational2Name"
        ])

# データ取得ループ
current_date = start_date
while current_date <= end_date:
    date_str = current_date.strftime('%Y-%m-%d')
    if date_str in existing_dates:
        print(f"[{date_str}] Skipped (already exists in file)")
        current_date += timedelta(days=1)
        continue

    url = f"https://api.ebird.org/v2/data/obs/{region_code}/historic/{current_date.year}/{current_date.month}/{current_date.day}"
    headers = {"X-eBirdApiToken": api_key}

    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            data = response.json()
            if data:
                with open(output_file, mode='a', newline='', encoding='utf-8') as file:
                    writer = csv.writer(file)
                    for obs in data:
                        obs_date = obs.get("obsDt")
                        if obs_date in existing_dates:
                            continue  # 重複防止
                        writer.writerow([
                            obs.get("speciesCode"),
                            obs.get("comName"),
                            obs.get("sciName"),
                            obs.get("obsDt"),
                            obs.get("howMany"),
                            obs.get("lat"),
                            obs.get("lng"),
                            obs.get("locationName"),
                            obs.get("locID") or obs.get("locationID"),
                            obs.get("obsValid"),
                            obs.get("obsReviewed"),
                            obs.get("userDisplayName"),
                            obs.get("subnational1Name"),
                            obs.get("subnational2Name"),
                        ])
                        existing_dates.add(obs_date)
                print(f"[{date_str}] - {len(data)} records saved")
            else:
                print(f"[{date_str}] - No data")
        else:
            print(f"[{date_str}] - API error {response.status_code}")
    except Exception as e:
        print(f"[{date_str}] - Exception: {e}")

    current_date += timedelta(days=1)
    time.sleep(1)

print("✅ 完了しました。")