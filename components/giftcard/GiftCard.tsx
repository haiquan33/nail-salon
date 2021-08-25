import styles from 'styles/components/GiftCard.module.css';

export const GiftCard = (props: any) => {
    return <section id="gift_card" className="py-5 sm:py-8 lg:py-10 text-white text-center bg-black">
        <div className="container">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:gap-14">
                <div className="ant-col-sm">
                    <h2 className="mb-2 sm:mb-3 lg:mb-4 font-bold text-red-600 robo_head">
                        GIFT CARD
                    </h2>

                    <div
                        className={ `${ styles.desc } content-text leading-6 lg:border-b lg:border-red-600 md:mb-6 pb-4 mx-auto text-red-600` }>
                        <p className="mb-2">
                            This season, gift them moments of luxury and relaxation with our gift cards!
                        </p>
                    </div>

                    <div className={ `text-center text-red-600 bg-red-600 ${ styles['buy-gift-btn'] }` }>
                        <a href="#"
                           className="p-3.5 text-black"
                        >
                            BUY NOW
                        </a>
                    </div>
                </div>

                <div className="ant-col-sm mb-6 sm:mb-0">
                    <a className="" href="https://vnailweb.com/checkout/">
                        <img src="https://vnailweb.com/wp-content/uploads/2020/11/Banner-Gift-NAILS-KUTE-SPA-1.jpg"
                             alt="..."/>
                    </a>
                </div>
            </div>
        </div>
    </section>
};