import {
    ClockCircleOutlined,
    FacebookFilled,
    GooglePlusSquareFilled,
    InstagramFilled,
    LockOutlined,
    ShopOutlined
} from '@ant-design/icons';
import { FB_LINK, GOOGLE_LINK, INSTAGRAM_LINK, YELP_LINK } from 'utils';

export const Footer = (props: any) => {
    const weekDays = [
        { date: 'Monday', open: 'Closed' },
        { date: 'Tuesday', open: '09:30 - 19:30' },
        { date: 'Wednesday', open: '09:30 - 19:30' },
        { date: 'Thursday', open: '09:30 - 19:30' },
        { date: 'Friday', open: '09:30 - 19:30' },
        { date: 'Saturday', open: '09:30 - 19:30' },
        { date: 'Sunday', open: '12:00 - 18:00' },
    ];
    const today = new Date().getUTCDay();
    const item = weekDays.map(({ date, open }, index) => {
        return <div
            key={ index + 1 }
            className={ `flex justify-between p-2 mb-2 ${ today === index + 2 ? 'border border-red-600' : '' }` }
        >
            <span>{ date }</span>
            <span>{ open }</span>
        </div>
    });

    return <footer id="site-footer" className="bg-black">
        <div className="vnp-bg-primary text-white pt-6 pb-6">
            <div className="container">
                <img width="120" src="https://vnailweb.com/wp-content/uploads/2020/12/Logo-12.png" alt="..."
                     className="mx-auto logo-footer mb-6"/>

                {/*Social Icons*/ }
                <div id="social-links" className="flex justify-center gap-14 mb-10">
                    <FacebookFilled
                        href={ FB_LINK }
                        target="_blank"
                        className="text-4xl text-red-600"
                    />

                    <InstagramFilled
                        href={ INSTAGRAM_LINK }
                        target="_blank"
                        className="text-4xl text-red-600"
                    />

                    <a rel="nofollow" target="_blank"
                       href={ YELP_LINK }
                       className="mt-1"
                    >
                        <img width="36" height="36" src="/icons/yelp-logo.svg" alt="Yelp logo"/>
                    </a>

                    <GooglePlusSquareFilled
                        href={ GOOGLE_LINK }
                        target="_blank"
                        className="text-4xl text-red-600"
                    />
                </div>

                {/*Contact Info*/ }
                <div className="sm:grid grid-cols-3 gap-8 text-red-600">
                    {/*Business Info*/ }
                    <div className="ant-col-md">
                        <h5 className="flex items-end gap-3 text-lg text-red-600 font-medium mb-5">
                            <ShopOutlined className="pb-1"/>
                            <span>Business Info</span>
                        </h5>

                        <p className="flex mb-4">
                            <span>+1 (904) 375 2061</span>
                        </p>

                        <p className="flex">
                            <a target="_blank" href="https://g.page/nailskutespa32003?share">
                                4685 US-17 Suite 1, Fleming Island, FL 32003
                            </a>
                        </p>

                        <div className="py-8 block md:hidden">
                            <div className="sep"/>
                        </div>
                    </div>

                    {/*Business Hours*/ }
                    <div className="ant-col-md sm:-ml-10 sm:mr-10 sm:mx-5">
                        <h5 className="flex items-end gap-3 text-lg text-red-600 font-medium mb-5">
                            <ClockCircleOutlined className="pb-1"/>
                            <span>Business Hours</span>
                        </h5>

                        { item }

                        <div className="py-8 block md:hidden">
                            <div className="sep"/>
                        </div>
                    </div>

                    {/*Holidays*/ }
                    <div className="ant-col-md">
                        <h5 className="flex items-end gap-3 text-lg text-red-600 font-medium mb-5">
                            <LockOutlined className="pb-1"/>
                            <span>Closing Holidays</span>
                        </h5>

                        <div className="flex flex-wrap">
                            <p className="mb-4 w-1/2">
                                New Years </p>
                            <p className="mb-4 w-1/2">
                                Thanksgiving </p>
                            <p className="mb-4 w-1/2">
                                Easter </p>
                            <p className="mb-4 w-1/2">
                                Christmas </p>
                            <p className="mb-4 w-1/2">
                                Memorial Day </p>
                            <p className="mb-4 w-1/2">
                                Fourth of July </p>
                            <p className="mb-4 w-1/2">
                                Labor Day </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center text-red-600 py-3 text-white bg-white">
            Copyright © 2021 <a href="https://vnailpro.com">VNailPro Inc</a>. All Right Reserved
        </div>
    </footer>;
};
