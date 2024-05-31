import requests

def fetch_address_by_postcode(postal_code):
    # Overpass URL
    url = "http://overpass-api.de/api/interpreter"
    
    # Overpass QLクエリ
    query = f"""
    [out:json];
    area["ISO3166-1"="SG"][boundary=administrative]->.singapore;
    (
        node["addr:postcode"="{postal_code}"](area.singapore);
        way["addr:postcode"="{postal_code}"](area.singapore);
        relation["addr:postcode"="{postal_code}"](area.singapore);
    );
    out body;
    >;
    out skel qt;
    """
    
    # APIリクエストを送信
    response = requests.get(url, params={'data': query})
    data = response.json()
    
    # 結果を返す
    return data

# 郵便番号を指定
postal_code = "520297"
address_data = fetch_address_by_postcode(postal_code)

# 結果の出力
print(address_data)
