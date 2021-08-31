import { PageHeader } from 'shared';
import staticData from 'static/assets/data.json';
import { Divider } from 'antd';

export const Policy = (props: any) => {
    const title = 'K Nail Spa Policies';
    const data: string[] = staticData.POLICIES;

    const item = data.map((text, index) =>
        <li key={ index + 1 } className="pb-3">
            { text }
        </li>);

    return <section id="policy" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <Divider style={ { borderColor: 'white' } }>
                <PageHeader text={ title }/>
            </Divider>

            <ul className="text-lg text-white sm:mx-24">
                { item }
            </ul>
        </div>
    </section>;
};