import { PageHeader } from 'shared';
import { IFeatureProduct } from 'types';
import { Badge, Modal, ModalProps, Tag } from 'antd';
import { CloseOutlined, DollarOutlined } from '@ant-design/icons';
import productStyles from 'styles/components/FeatureService.module.css';

export const SubMenu = ({ visible, data, setVisible }: any) => {
    const products: IFeatureProduct[] = data.content;
    const product = products.map((prod, index) => {
        return <div key={ index + 1 } className="mb-4 sm:mb-6 lg:ml-10">
            <Badge.Ribbon text={ prod.type } color="black" className="hidden sm:block">
                <div className="flex gap-4">
                    {/* Thumbnail */ }
                    <div className="sm:mr-2 md:mr-0 lg:mr-2">
                        <div className={ productStyles.thumb }>
                            <img src={ prod.img } alt={ prod.title } className={ productStyles.img }/>
                        </div>
                    </div>

                    <div className="flex flex-col sm:justify-center">
                        {/* Title */ }
                        <h3 className="mb-2 text-white font-bold lg:text-lg">{ prod.title }</h3>

                        {/* Price */ }
                        <div className="flex flex-wrap-reverse mr-3 mb-2 text-white">
                            <DollarOutlined className="mt-1 mr-1 sm:mt-2"/>
                            <span className="sm:mt-1 mr-2">{ prod.price }</span>
                            <Tag className="sm:hidden font-bold bg-red border-0">{ prod.type }</Tag>
                        </div>

                        {/* Description */ }
                        <div className="text-white italic font-thin">
                            { prod.description }
                        </div>
                    </div>
                </div>
            </Badge.Ribbon>
        </div>
    });

    const title = <PageHeader text={ data?.title } className="text-red-600"/>;
    const closeIcon = <CloseOutlined className="text-red-600"/>

    const modalSettings: ModalProps = {
        centered: true,
        width: 1200,
        footer: null,
        visible,
        title,
        closeIcon,
        onCancel: () => setVisible(false),
        bodyStyle: { background: '#b3030c', border: '2px solid #fff' }
    }

    return <Modal { ...modalSettings }>
        <p className="text-white text-lg mb-6 lg:mb-10 lg:ml-10">{ data?.subTitle }</p>

        <div className="sm:grid lg:grid-cols-2 gap-4">
            { product }
        </div>
    </Modal>
}
