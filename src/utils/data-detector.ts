import { experiences } from '../assets/data/es/experiences.js';
import { worksEn } from '../assets/data/en/works-en.js';
import { experiencesEn } from '../assets/data/en/experiences-en.js';
import { works } from '../assets/data/es/works.js';
export default class DataDetector{
   static detect(lang: string){
    if(lang === 'es'){
        return {
            works: works,
            experiences: experiences
        }
    }else if(lang === 'en'){
        return {
            works: worksEn,
            experiences: experiencesEn
        }
    }
    return {
        works: works,
        experiences: experiences
    }
   }

}