from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from huggingface_hub import InferenceClient
from fastapi import FastAPI
from pydantic import BaseModel
from apify_client import ApifyClient
import os

app = FastAPI()
from dotenv import load_dotenv
load_dotenv()
CLIENT0 = InferenceClient(token= "hf_JozZvSWqlgJLarW" + "tovadKutApyFysBttVD")
CLIENT1 = OpenAI(base_url="https://openrouter.ai/api/v1",api_key= os.getenv("KEY"))#ai model connection
CLIENT2 = OpenAI(base_url="https://openrouter.ai/api/v1",api_key= os.getenv("KEY2"))#ai model connection
CLIENT3 = OpenAI(base_url="https://openrouter.ai/api/v1",api_key= os.getenv("KEY6"))
CLIENT4 = OpenAI(base_url="https://openrouter.ai/api/v1",api_key= os.getenv("KEY3"))#ai model connection
CLIENT5 = OpenAI(base_url="https://openrouter.ai/api/v1",api_key= os.getenv("KEY4"))#ai model connection
CLIENT6 = OpenAI(base_url="https://openrouter.ai/api/v1",api_key= os.getenv("KEY5"))#ai model connection

clients = [CLIENT0, CLIENT1, CLIENT2, CLIENT3, CLIENT4, CLIENT5, CLIENT6]

def getResponse(usermessage, prompt, assistant="", client=0):
    """Universal AI Response Provider"""
    global client_lastRequest
    messages = [{"role":"system","content": prompt}]
    
    if assistant != "":
        #adding history
        for msg in assistant.split("\n"):
            user = msg.split(":")
            if user[0] == "User":
                messages.append({"role":"user","content":user[1]})
            else:
                messages.append({"role":"assistant","content":user[1]})
    #adding current message
    messages.append({"role":"user","content": usermessage})
    #setting model
    if client == 0:
        if "roleplay" in prompt.lower() or "giyu" in prompt.lower():
            model = "meta-llama/Meta-Llama-3-8B-Instruct"
        else:
            model = "deepseek-ai/DeepSeek-V3-0324"
    elif "roleplay" in prompt.lower() or "giyu" in prompt.lower():
        model = "meta-llama/llama-3.3-70b-instruct:free"
    else:
        model = "deepseek/deepseek-chat-v3-0324:free "
    try:
        response = clients[client].chat.completions.create(
            messages= messages,
            temperature=1.0,
            top_p=1.0,
            max_tokens=200,
            model= model
        )
        if not response.choices:
            print("Model Changed")
            next_client = client+1
            if next_client == 7:
                print("All clients failed")
                return
            return getResponse(usermessage, prompt, assistant, client=next_client)
    except:
        print("Model Changed")
        next_client = client+1
        if next_client == 7:
            print("All clients failed")
            return "Failed"
        return getResponse(usermessage, prompt, assistant, client=next_client)

        
    print(f"#==========Response==========#\nModel: {model}\n\nINPUT: {messages}\nOUTPUT: {response.choices[0].message.content}\n#============================#")
    return response.choices[0].message.content

mood = "happy"
persona = {"intelligence": 50, "sass": 80, "mischiveous": 64}
relation = 10
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Message(BaseModel):
    text: str

@app.post("/")
async def chat(msg: Message):

    user_text = msg.text

    # KELLY AI LOGIC
    prompt = f"""Roleplay Kelly — cute, sassy, human-like Discord mod with moods and personality.\nMood: {mood},Persona: {persona},Relation: {relation}\nReply in 10–30 words, 0–3 emojis based on Moods, Persona and Relation. You can perform user command, save for later or deny.If Member then Deny. Giyu (guard) and Ayasaka (Assistant) call only when need."""
    reply = getResponse(user_text, prompt)

    return {
        "reply": reply
    }