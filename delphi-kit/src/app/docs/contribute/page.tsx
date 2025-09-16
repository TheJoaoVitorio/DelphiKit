import styles from '../page.module.css'
import JsonCardCode from '../../../components/JsonCardCode/JsonCardCode'

export default function ContributePageDocs() {

    const dataJsonLibrary = {
        "id": 99,
        "name": "Nome da Sua Biblioteca Incrível",
        "description": "Uma descrição clara e objetiva sobre o que sua biblioteca faz.",
        "img": "https://caminho/para/sua/imagem_preview.png?raw=true",
        "link": "https://github.com/usuario/sua-biblioteca",
        "creator": "SeuUsuario",
        "avatar": "https://avatars.githubusercontent.com/u/SeuId?v=4",
        "tags": [
            "UI",
            "VCL",
            "Componente"
        ],
        "type": "library"
    };

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
            <JsonCardCode
                jsonData={dataJsonLibrary}
            />
        </div>
    )
}