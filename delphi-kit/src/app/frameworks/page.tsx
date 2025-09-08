import { CardDescription } from "@/src/components/CardDescription/CardDescription";
import frameworkService from "@/src/services/frameworkService";


export default async function FrameworksPage() {
    const api = frameworkService();
    const frameworksItems = await api.getFrameworksData();

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
                {frameworksItems.map((item) => (
                    <CardDescription
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        link={item.link}
                        description={item.description}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    );
}
