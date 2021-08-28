import { PageHeader } from './';
import { IFeatureProduct } from 'types';
import { CloseOutlined } from '@ant-design/icons';
import { Modal as AntdModal, ModalProps } from 'antd';
import { GridMenu } from 'components/feature-service/components';

export const Modal = ({ visible, data, setVisible }: any) => {
    const products: IFeatureProduct[] = data.content;

    const closeIcon = <CloseOutlined className="text-red-600"/>
    const title = <PageHeader text={ data?.title } className="text-red-600"/>;
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

    return <AntdModal { ...modalSettings }>
        <p className="text-white text-lg mb-6 lg:mb-10 lg:ml-10">
            { data?.subTitle }
        </p>

        <GridMenu data={ products }/>
    </AntdModal>;
}
