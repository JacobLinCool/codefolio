import "./style.css";

init();

async function init() {
    const highlighter = loadShiki().then(() => shiki.getHighlighter({ theme: "nord", langs: ["javascript"] }));
    const shikiAbout = getAboutCode(highlighter);
    const shikiEdu = getEducationCode(highlighter);
    const shikiContact = getContactCode(highlighter);
    const shikiSkill = getSkillCode(highlighter);
    const text = `const JacobLinCool = require("JacobLinCool")`;
    const console = document.querySelector("#console");
    const input = console.querySelector("span");

    await sleep(1000);
    await type(input, text, 50, 30);
    await sleep(500);
    console.style.top = "40px";
    await sleep(1300);
    while (input.innerHTML.length > 0) {
        await sleep(20);
        input.innerHTML = input.innerHTML.slice(0, -1);
    }
    await sleep(500);
    await type(input, "JacobLinCool", 30);
    await sleep(100);
    input.style.fontSize = "2.2rem";
    await sleep(100);
    console.style.padding = "12px";
    await sleep(600);
    input.style.fontSize = "1.9rem";
    await sleep(100);
    console.style.padding = "8px";
    await sleep(500);
    input.style.transform = "rotate(5deg)";
    await sleep(500);
    input.style.transform = "rotate(0deg)";
    await sleep(400);
    console.style.background = "#eceff4";
    console.style.color = "#2e3440";

    document.querySelector("#about").innerHTML = await shikiAbout;
    document.querySelector("#about").style.display = "block";
    await sleep(20);
    document.querySelector("#about").style.opacity = "1";
    document.querySelector("#about").style.transform = "translateY(0)";
    await sleep(500);

    document.querySelector("#contact").innerHTML = await shikiContact;
    document.querySelector("#contact").style.display = "block";
    await sleep(20);
    document.querySelector("#contact").style.opacity = "1";
    document.querySelector("#contact").style.transform = "translateY(0)";
    await sleep(500);

    document.querySelector("#education").innerHTML = await shikiEdu;
    document.querySelector("#education").style.display = "block";
    await sleep(20);
    document.querySelector("#education").style.opacity = "1";
    document.querySelector("#education").style.transform = "translateY(0)";
    await sleep(500);

    document.querySelector("#skill").innerHTML = await shikiSkill;
    document.querySelector("#skill").style.display = "block";
    await sleep(20);
    document.querySelector("#skill").style.opacity = "1";
    document.querySelector("#skill").style.transform = "translateY(0)";
    await sleep(500);

    document.querySelector("#copyright").style.display = "block";
    await sleep(20);
    document.querySelector("#copyright").style.opacity = "1";
    await sleep(500);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function type(elm, txt, delay = 50, random = 0, space = 40) {
    for (let i = 0; i < txt.length; i++) {
        await sleep(delay + Math.random() * random);
        if (txt[i] === " ") await sleep(space);
        elm.innerHTML += txt[i];
    }
}

function loadShiki() {
    return new Promise((resolve) => {
        const shiki = document.createElement("script");
        shiki.src = "https://unpkg.com/shiki";
        shiki.onload = resolve;
        document.body.appendChild(shiki);
    });
}

async function getAboutCode(highlighter) {
    return (await highlighter).codeToHtml(
        `// basics.js
JacobLinCool.name = "林振可"
JacobLinCool.birth = [2003, null, null]
JacobLinCool.aliases = ["JacobLinCool", "Jacob Lin"]
JacobLinCool.hometown = "台北市"
JacobLinCool.living = [
    {
        name: "台北市",
        current: true,
    },
]
JacobLinCool.languages = ["zh_TW", "en_US"]
// PS: 至少可以用英文寫程式
`,
        "js"
    );
}

async function getEducationCode(highlighter) {
    return (await highlighter).codeToHtml(
        `// education.js
JacobLinCool.education = [
    {
        name: "國立臺灣師範大學",
        major: "資訊工程學系",
        degree: "學士 (BS)",
        start: [2021, null, null],
        graduated: false,
        current: true,
    },
    {
        name: "國立臺灣師範大學附屬高級中學",
        start: [2018, 9, null],
        end: [2021, 6, null],
        graduated: true,
        class: 1481,
    },
    {
        name: "臺北市立金華國民中學",
        start: [2015, 9, null],
        end: [2018, 6, null],
        graduated: true,
    },
    {
        name: "臺北市大安區新生國民小學",
        start: [2009, 9, null],
        end: [2015, 6, null],
        graduated: true,
    },
]
`,
        "js"
    );
}

async function getContactCode(highlighter) {
    return (await highlighter).codeToHtml(
        `// contact.js
JacobLinCool.contact = {
    email: "jacoblincool@gmail.com",
    website: "https://jacob.pages.dev/",
    social: {
        facebook: "https://www.facebook.com/jacob.lin.cool",
        instagram: "https://www.instagram.com/jacoblincool",
        twitter: "https://twitter.com/JacobLinCool",
        github: "https://github.com/JacobLinCool",
        telegram: "https://t.me/jacoblincool",
    },
}
`,
        "js"
    );
}

async function getSkillCode(highlighter) {
    return (await highlighter).codeToHtml(
        `// skill.js
JacobLinCool.skill = [
    {
        name: "JavaScript",
        level: "basics",
        type: "programming_language",
    },
    {
        name: "C++",
        level: "basics",
        type: "programming_language",
    },
    {
        name: "Visual Basic 6",
        level: "almost_forgotten",
        type: "programming_language",
    },
    {
        name: "Python",
        level: "learning",
        type: "programming_language",
    },
    {
        name: "Go",
        level: "learning",
        type: "programming_language",
    },
    {
        name: "Node.js",
        level: "basics",
        type: "programming_tools",
    },
    {
        name: "TypeScript",
        level: "basics",
        type: "programming_tools",
    },
    {
        name: "Qt (C++)",
        level: "forgotten",
        type: "programming_tools",
    },
    {
        name: "Electron",
        level: "some_experiences",
        type: "programming_tools",
    },
    {
        name: "Vue",
        level: "some_experiences",
        type: "programming_tools",
    },
]
`,
        "js"
    );
}
