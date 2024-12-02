import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";
import { useSelector } from "react-redux";

const OpenAi= ()=>{
    const GPTSearchKey = useSelector(store=>store.gpt.GPTSearchKey);
    const openai = new OpenAI({
        apiKey:GPTSearchKey,
        dangerouslyAllowBrowser:true
    });
}


export default OpenAi.openai;