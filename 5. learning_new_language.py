# 5. 使用/學習不熟悉的程式語言
# 使用不熟悉的程式語言編寫代碼, 例如: Python, Ruby, Go, Scala, Kotlin, Swift等等
# 調用openai的API, 透過GPT-4生成一段文本


import os
import openai
import json
import requests

# 從環境變量中獲取openai的API key
api_key = os.getenv('OPENAI_API_KEY')

# 通過openai api 調用gpt-4 
def generate_text(prompt):
    response = requests.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        headers={
            "Authorization": f"Bearer
            {api_key}"
        },

        json={
            "prompt": prompt,
            "max_tokens": 100
        }
    )

    return response.json()


# 調用generate_text方法, 生成一段文本
prompt = "Once upon a time"
result = generate_text(prompt)
print(result)