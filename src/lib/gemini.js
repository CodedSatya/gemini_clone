/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */
require("dotenv").config();
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyBH3bKAvYsTRTVsZuh_8l9SvN926rWdQjc";
console.log(apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const safetySetting = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
];

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

/*
[
{
role: "",
parts: [{text: ""},{text: ""}]
},
{
}
]
*/

export let history = [
    {
        role: "user",
        parts: [
            {text: ""}
        ]
    },
    {
        role: "model",
        parts: [
            {text: ""}
        ]
    }
]

async function run(prompt) {
    const chat = model.startChat({
        history: history,
        generationConfig: {
            maxOutputTokens: 100,
        },
        safetySetting, // See https://ai.google.dev/gemini-api/docs/safety-settings
    });

    const result = await chat.sendMessage(prompt.content);
    
    history.map( obj => {
        if (obj.role === "user"){
            obj.parts.push({text: prompt.content})
        }else{
            obj.role = "model"
            obj.parts.push({text: result.response.text()})
        }
    })

    console.log(result.response.text());
    return result.response.text();
}

export default run;
