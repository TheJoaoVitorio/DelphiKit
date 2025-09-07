import { CardDescription } from "@/src/components/CardDescription/CardDescription";


export default function FrameworksPage() {
    return (
        <div className="pageContainer">
            <div className="titleRed">
                <h1 className="text-3xl font-bold mb-4">
                Frameworks
                </h1>
            </div>

            <p className="headerText">
                Explore powerful Delphi frameworks that simplify your development.
            </p>

        
            <div className="cardGrid">
                <CardDescription
                    img="https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg"
                    name="Roblox"
                    description="Showcase your creations, highlight achievements, and invite others to join your games."
                    tags={["Game", "Sandbox", "Community"]}
                />

            </div>
        </div>
    );
}
