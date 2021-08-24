import { Collapse } from 'antd';
import { Panel } from 'rc-collapse';
import { SendOutlined } from '@ant-design/icons';
import { IFaq } from 'types';
import staticData from 'static/assets/data.json';

export const FAQ = (props: any) => {
    const faqs: IFaq[] = staticData.FAQS;

    const item = faqs.map((faq, index) => {
        const header = <span className="text-white">{ faq.question }</span>;

        return <Panel key={ index + 1 } header={ header } style={ { color: 'white' } }>
            <p className="text-white">{ faq.answer }</p>
        </Panel>
    });

    return <section id="faq" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <h4 className="text-center text-white font-lobster section-head mb-2 sm:mb-3 lg:mb-6">
                FAQs
            </h4>

            <Collapse
                className="lg:text-2xl"
                expandIcon={ (panelProps) => <SendOutlined style={ { fontSize: '20px' } }/> }
                ghost
            >
                { item }
            </Collapse>
        </div>
    </section>
};
