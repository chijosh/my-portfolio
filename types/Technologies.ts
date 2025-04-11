export interface Technology {
    _id: string;
    _createdAt: Date;
    lists: string[];
}


export enum TechStackEnum {
    PYTHON = "Python",
    PHP = "PHP",
    LARAVEL = "Laravel",
    DJANGO = "Django",
    NESTJS = "NestJs",
    HTML = "HTML",
    CSS = "CSS",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
    React = "React",
    NextJS = "NextJs",
    NodeJS = "NodeJS",
    ExpressJS = "ExpressJS",
    MongoDB = "MongoDB",
    TailwindCSS = "TailwindCSS",
    GitHub = "GitHub",
    Git = "Git",
    Figma = "Figma",
    FramerMotion = "FramerMotion",
    Vercel = "Vercel",
    Netlify = "Netlify",
    Firebase = "Firebase",
    GraphQL = "GraphQL",
    RESTAPI = "RESTAPI",
    Redux = "Redux",
    MaterialUI = "MaterialUI",
    StyledComponents = "StyledComponents",
    Jest = "Jest",
    ReactTestingLibrary = "ReactTestingLibrary",
    Postman = "Postman",
    Swagger = "Swagger",
    OpenAPI = "OpenAPI",
    JSON = "JSON",
    XML = "XML",
    YAML = "YAML",
    SQL = "SQL",
    NoSQL = "NoSQL",
    PostgreSQL = "PostgreSQL",
    MySQL = "MySQL",
}


export namespace TechStackEnum {
    export const TechStackIDValue: Record<TechStackEnum, string> = {
        [TechStackEnum.PYTHON]: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        [TechStackEnum.PHP]: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
        [TechStackEnum.LARAVEL]: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
        [TechStackEnum.DJANGO]: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
        [TechStackEnum.NESTJS]: "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
      [TechStackEnum.CSS]: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        [TechStackEnum.HTML]: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        [TechStackEnum.JavaScript]: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
        [TechStackEnum.TypeScript]: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
        [TechStackEnum.React]: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        [TechStackEnum.NextJS]: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
        [TechStackEnum.NodeJS]: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
        [TechStackEnum.ExpressJS]: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
        [TechStackEnum.MongoDB]: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
        [TechStackEnum.TailwindCSS]: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white",
        [TechStackEnum.GitHub]: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
        [TechStackEnum.Git]: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
        [TechStackEnum.Figma]: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
        [TechStackEnum.FramerMotion]: "https://img.shields.io/badge/Framer_Motion-00C2B5?style=for-the-badge&logo=framer&logoColor=white",
        [TechStackEnum.Vercel]: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
        [TechStackEnum.Netlify]: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
        [TechStackEnum.Firebase]: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white",
        [TechStackEnum.GraphQL]: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
        [TechStackEnum.RESTAPI]: "https://img.shields.io/badge/REST_API-00A1E4?style=for-the-badge&logo=rest&logoColor=white",
        [TechStackEnum.Redux]: "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
        [TechStackEnum.MaterialUI]: "https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white",
        [TechStackEnum.StyledComponents]: "https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
        [TechStackEnum.Jest]: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
        [TechStackEnum.ReactTestingLibrary]: "https://img.shields.io/badge/React_Testing_Library-FF61DA?style=for-the-badge&logo=react-testing-library&logoColor=white",
        [TechStackEnum.Postman]: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
        [TechStackEnum.Swagger]: "https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white",
        [TechStackEnum.OpenAPI]: "https://img.shields.io/badge/OpenAPI-7B7B7B?style=for-the-badge&logo=openapi&logoColor=white",
        [TechStackEnum.JSON]: "https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white",
        [TechStackEnum.XML]: "https://img.shields.io/badge/XML-FF8C00?style=for-the-badge&logo=xml&logoColor=white",
        [TechStackEnum.YAML]: "https://img.shields.io/badge/YAML-FF8C00?style=for-the-badge&logo=yaml&logoColor=white",
        [TechStackEnum.SQL]: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
        [TechStackEnum.NoSQL]: "https://img.shields.io/badge/NoSQL-4EA94B?style=for-the-badge&logo=nosql&logoColor=white",
        [TechStackEnum.PostgreSQL]: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
        [TechStackEnum.MySQL]: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    };
  
    export const getTechStackName = (id: TechStackEnum): string => {
      return TechStackIDValue[id];
    };
  }