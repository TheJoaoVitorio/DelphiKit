import { SectionCard } from '../../components/SectionCard/SectionCard';
import { Search } from '../../components/Search/Search';

export default async function ExplorePage() {
    return(
        <div style={{ maxWidth: '60%', margin: '0 auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem', alignItems: 'center'}}>
            <SectionCard 
            title='Welcome to the Explore area!'
            description='A space dedicated to the Delphi community, where you can easily discover and find components, libraries, and tools for your projects.
Here you find GitHub repositories created by developers around the world, ready for you to explore and integrate.'
            />

            <Search/>
        </div>

        
    )
}