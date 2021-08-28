import { IComment } from 'types';
import { PageHeader, ShowMore } from 'shared';
import { Avatar, Comment, Rate } from 'antd';
import staticData from 'static/assets/data.json';

export const Review = (props: any) => {
    const title = 'Reviews';
    const comments: IComment[] = staticData.COMMENTS;
    const item = comments.map((comment, index) => {
        return <Comment
            key={ index + 1 }
            className="sm:m-10 border-b border-black"
            avatar={
                <Avatar
                    src={ comment.avatar }
                    alt={ comment.name }
                    className="w-10 h-10 sm:w-20 sm:h-20"
                />
            }
            author={
                <div className="flex justify-between mb-4">
                    <a className="flex flex-col text-white text-lg">
                        <span>{ comment.name }</span>
                        <span className="font-thin">{ comment.social }</span>
                    </a>
                    <Rate className="text-white" value={ 5 }/>
                </div>
            }
            content={ <p className="text-white text-lg font-light italic">{ comment.content }</p> }
        />
    })

    return <section id="reviews" className="py-5 sm:py-8 lg:py-10">
        <div className="container">
            <PageHeader text={ title }/>

            <div className="sm:grid grid-cols-2 gap-4 mb-4">
                { item }
            </div>

            <ShowMore/>
        </div>
    </section>;
};

// <div className="flex justify-between need-show-more-wrapper relative">
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8  ">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Charlotte-Patin--300x300.jpeg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Charlotte Patin</p>
//                             <p className="font-light">Facebook</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>Amazing staff! So thorough and kind. Most relaxing experience of any place around</p>
//             </div>
//         </div>
//     </div>
//
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8  ">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Latanya-P..jpeg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Latanya P.</p>
//                             <p className="font-light">Yelp</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>My daughter’s and I go here. It is very clean, family friendly. They are up to date with
//                     the latest trends in nail colors and art.</p>
//             </div>
//         </div>
//     </div>
//
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8  ">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Amy-Lanfersiek-Green-300x300.jpg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Connie </p>
//                             <p className="font-light">Facebook</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>Am in <img draggable="false" role="img" className="emoji" alt="❤️"
//                               src="https://s.w.org/images/core/emoji/13.0.1/svg/2764.svg"/> with my new St
//                     Paddy’s Day nails. Was accommodated very last minute. Very detail oriented yet fast.
//                     Jenny is the best. <img draggable="false" role="img" className="emoji" alt="🍀"
//                                             src="https://s.w.org/images/core/emoji/13.0.1/svg/1f340.svg"/>
//                 </p>
//             </div>
//         </div>
//     </div>
//
//     <div className="col-12 order-1">
//         <a href="#"
//            className="go-show-more-item go-show-more-item-line d-block d-md-none vnp-color-primary text-underline font-11x font-light w-100 text-center">Show
//             More</a>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm ">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Heather-Weldon-1.png.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Heather Weldon</p>
//                             <p className="font-light">Google</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>I absolutely love and recommend Nails Kute and Spa. Very clean, professional, and they
//                     always go above and beyond to make you feel welcome and appreciated. Excellent quality
//                     and the prices are great.</p>
//             </div>
//         </div>
//     </div>
//     <div className="col-12 order-1">
//         <a href="#"
//            className="go-show-more-item go-show-more-item-line d-none d-md-block vnp-color-primary text-underline font-11x font-light w-100 text-center">Show
//             More</a>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Mariana-I..jpeg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Mariana I.</p>
//                             <p className="font-light">Yelp</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>These are the nails that I requested and they did a superior job! My lady was very nice
//                     and took her time doing my nails. I also got a pedicure and it was not rushed at all.
//                     Very relaxing. This is my go to salon now!</p>
//             </div>
//         </div>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Keisha-Y.-1.jpeg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Keisha Y.</p>
//                             <p className="font-light">Yelp</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>Today was a real win for me! I wanted to try this new place because the last place I went
//                     to was a disappointment. I got a Luxury pedicure which was very good and relaxing. I
//                     also got my dip redone. It was only my second time getting the dip, but the first time
//                     was so thick and ugly I was hesitant. I ended up LOVING my nails… they are natural by
//                     the way but on a total stroke of luck, I found Ben who I thought did the most amazing
//                     pedi ever when I got to Jacksonville four years ago in a completely different location.
//                     Turns out he is a perfectionist in everything. BEN IS AMAZING and I won’t lose him
//                     again! I’m one happy client.</p>
//             </div>
//         </div>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Amanda-W-King-300x300.jpg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Amanda W King</p>
//                             <p className="font-light">Facebook</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>I asked for my daughter and I both to have a spa pedicure and mine lasted for over an
//                     hour and hers lasted for less than 15 minutes but they still charged us the same price
//                     when I said something to the owner he didn’t seem to care. Been going for a while but
//                     won’t be back.</p>
//             </div>
//         </div>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Lauren-Wagner-.png.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Lauren Wagner</p>
//                             <p className="font-light">Google</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>The best nail salon ever! I drive from Avondale/Riverside to get my nails done here.
//                     Nails Kute &amp; Spa is so quiet and relaxing it’s the perfect place to unwind. I have
//                     Ben do my nails, but I have had my nails done by Jenny too. Both Ben and Jenny are
//                     meticulous with their work and your nails look perfect by the time you’re done. I’m
//                     always so impressed and happy with the quality of work the salon provides!</p>
//             </div>
//         </div>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Bonnie-Caballero--300x300.jpeg"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Bonnie Caballero</p>
//                             <p className="font-light">Facebook</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>Nails Kute and Spa was able accommodate my sister and I last minute on Tuesday without an
//                     appointment. Their spa was very bright and clean and pretty inside. They have a large
//                     selection of trendy nail colors that I can’t wait to try out next. Both nail technicians
//                     that I saw were detail oriented and made sure my nails were perfect despite being open
//                     past closing time.</p>
//             </div>
//         </div>
//     </div>
//     <div className="order-0 col-md-6 mb-2 mb-lg-4 px-lg-8 hide-on-sm hide-on-all">
//         <div className="entry h-100 pb-1 pb-lg-3">
//             <div className="row justify-content-between align-items-center mb-4 mb-lg-6">
//                 <div className="col">
//                     <div className="form-row align-items-center">
//                         <div className="col-auto">
//                             <img width="80" height="80"
//                                  src="https://vnailweb.com/wp-content/uploads/2021/04/Selena-L..jpeg.webp"
//                                  alt="..." className="avatar rounded-circle vnp-border-secondary"/>
//                         </div>
//                         <div className="col lh-13">
//                             <p className="font-medium font-11x mb-1">Selena L.</p>
//                             <p className="font-light">Yelp</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-auto">
//                     <div className="d-flex rating vnp-color-secondary">
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                         <i className="fas fa-star"></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="content-text lh-16 font-italic">
//                 <p>I was so happy to find a super clean &amp; efficient Spa! I took my girlfriend as a
//                     “pampering day” surprise &amp; got my feet done as well. Now every since then I go once
//                     a month without her most of the time . This place is very welcoming. If you make an
//                     appointment at a time ahead there, should be no issue with them sitting you down at the
//                     time you requested. Jenny is my main, she is the bomb to me! My feet most certainly
//                     aren’t the prettiest but she is always sure to get them to the best they can be. The
//                     equipment they use (their chairs) are great. But my favorite aspect of the salon is how
//                     clean they are in everything they do. Highly recommend but I would say this place is
//                     starting to get a lot of buzz so make your appointments!</p>
//                 <p>Pros: Clean, appointment service, state of the art equipment, friendly service.</p>
//                 <p>Cons: Over scheduling is possible. During peak hours even if you show up early you might
//                     have to wait some time for your service.</p>
//             </div>
//         </div>
{/*    </div>*/
}
{/*</div>*/
}
