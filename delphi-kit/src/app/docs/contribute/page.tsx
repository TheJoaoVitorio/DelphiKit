import styles from '../page.module.css'
import JsonCardCode from '../../../components/JsonCardCode/JsonCardCode'

export default function ContributePageDocs() {

    const dataJsonLibrary = [{
        "id": 99,
        "name": "NameLibrary",
        "description": "A clear and objective description of what your library does.",
        "img": "https://link/for/you/image_preview.png?raw=true",
        "link": "https://github.com/user/nameLibrary",
        "creator": "YouUser",
        "avatar": "https://avatars.githubusercontent.com/u/SeuId?v=4",
        "tags": [
            "UI",
            "VCL",
            "Component"
        ],
        "type": "library",

    }, {
        "id": 100,
        "name": "NameFramework",
        "description": "description",
        "link": "https://github.com/userDev/frameworkDelphi",
        "creator": "userDev",
        "avatar": "",
        "img": "https://github.com/userDev/frameworkDelphi/frameworkImage.png?raw=true",
        "tags": [
            "WebFramework",
            "rest",
            "api"
        ],
        "type": "framework"
    }
    ];

    return (
        <div>
            <h2>How to Contribute?</h2>

            <p>Currently, the addition is done manually through a Pull Request on GitHub. In the future, we will have a form to automate this process, but for now, please follow the steps below.</p>

            <h4>Step by Step to Add a Project</h4>

            <h5>1. Fork the Repository</h5>

            <h5>2. Choose the Category</h5>
            <h5>Navigate to the <span style={{ background: '#6851514f', padding: '1px 6px', borderRadius: '10px', color: '#ff0000e1' }} >data/</span> folder. You will find two files:</h5>
            <h5> <span style={{ background: '#6851514f', padding: '1px 6px', borderRadius: '10px', color: '#ff0000e1' }}>library/data.json:</span> For components, UI libraries, theme editors, and other auxiliary tools. </h5>
            <h5> <span style={{ background: '#6851514f', padding: '1px 6px', borderRadius: '10px', color: '#ff0000e1' }}>frameworks/data.json:</span> For architecture frameworks, web, ORM, etc. </h5>

            <h5>3. Add the Data</h5>
            <h5>Open the chosen JSON file and add a new object to the end of the list.</h5>
            <h5>Templates</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {dataJsonLibrary.map((item) => (
                    <JsonCardCode
                        key={item.id}
                        jsonData={item} />
                ))}
            </div>

        </div>
    )
}