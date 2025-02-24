import React from 'react'
import Link from 'next/link';

export default function Footer() {
  return (
    <div> <div>

    <footer id="footer" className="footer">
                {/* <!-- Footer Top --> */}
                <div className="footer-top">
                    <div className="container1 ">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>About Us</h2>
                                    {/* <p>With over 16+ years of expertise, Sixth Star Technology stands as a premier IT solution provider in India.</p> */}
                                    <div className="col-12">
                                <div className="cert-img ">
                                    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/iso-20000_obiguc.webp"  alt="iso-20000" loading='lazy'/>
                                    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/gdpr_qhmwv2.webp"  alt="gdpr" loading='lazy' />
                                    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055889/rqc_vqtye4.webp"  alt="rqc" loading='lazy' />
                                    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055890/ukasl_ae4pum.webp"  alt="ukasl" loading='lazy' />
                                    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055889/iso-27001_nenayk.webp"  alt="iso-27001" loading='lazy' />							
                                </div>
    
                                </div>
                                    <ul className="footer-link">
                                    <li><i className="fa fa-envelope"></i><Link href="mailto:sales@sixthstar.in">sales@sixthstar.in</Link></li>
                                    <li><i className="fa fa-envelope"></i><Link href="mailto:support@sixthstar.in">support@sixthstar.in</Link></li>
                                    <li><i class="fa-solid fa-phone"></i><Link href="tel:9176627399">9176627399</Link></li>
                                    <li><i class="fa-solid fa-phone"></i><Link href="tel:9176627399">9176637399</Link></li>
                                </ul>
                                    {/* <!-- Social --> */}
                                    <ul className="social">
                                        <li><a href="https://www.facebook.com/sixthstartechnologies.page/"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li><Link href="https://twitter.com/sixthstartechno"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/@sixthstarTechnologies"><i className="fa-brands fa-youtube"></i></Link></li>
                                        <li><Link href="https://www.instagram.com/sixthstar_technologies/"><i className="fa-brands fa-instagram"></i></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/sixth-star-technologies"><i className="fa-brands fa-linkedin"></i></Link></li>
                                    </ul>
                                    {/* <!-- End Social --> */}
                                </div>
                            </div>
                            
                            <div className="col-lg-5 col-md-6 col-12">
                            <div className="row">
                              
                            </div>
    
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="single-footer foot-address">
                                    <h3>Corporate Office:</h3>
                                    <p>Sixth Star Technologies, 1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar,  Thoraipakkam, Chennai, Tamilnadu,
                                    India – 600097</p>
                                    <h3>Germany:</h3>
                                    <p>Sixth Star Technologies, Boetzinger Straße 60, 79111 Freiburg, Germany</p>
                                </div>
                                    </div>
    
                                    <div className="col-md-6">
                                    <div className="single-footer foot-company f-link">
                                <div className="single-footer foot-address">
                                    <h3>Hyderabad:</h3>
                                    <p>CMD Infotech Plot No A-38,Ground Floor JJ Nagar , Naredmet x Roads, Hyderabad-500094
                                    PH: 9383996666</p>
                                    <h3>Malaysia:</h3>
                                    <p>Sixth Star Technologies, C4-2-39, Jalan 1/152,Taman OUG, Parklane ,58200, Kuala Lumpur, Malaysia.</p>
                                </div>
                                </div>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
    
                            </div>
    
                            <div className="col-lg-4 col-md-6 col-12 ">
                                <div className="single-footer f-link">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                        <ul className='footer-list'>
                                        <h2>Company</h2>
                                    <li><Link href="/about/about-sixthstar">About Us</Link></li>
                                    <li><Link href="/about/why-choose-us/">Why Sixthstar  </Link></li>
                                    <li><Link href="/about/sitemap-2">Sitemap</Link></li>
                                    <li><Link href="#" style={{ fontWeight: 600, fontSize:'17px' }}>Hosting</Link></li>
                                    <li><Link href="/server/dedicated-server-hosting-provider-in-chennai">Dedicated Hosting</Link></li>
                                    <li><Link href="/server/vps-hosting-provider-in-india">VPS Hosting</Link></li>
                                    <li><Link href="/server/cloud-hosting-companies-in-india">Cloud Hosting</Link></li>
                                    <li><Link href="/server/shared-server-hosting-in-chennai">Shared Server Hosting</Link></li>
                                    <li><Link href="/server/carbonio-email-hosting-in-chennai">Carbonio Email Hosting</Link></li>

                                    </ul>
                                        </div>  
                                        <div className="col-lg-6 col-md-6 col-6">
                                        <ul className='footer-list2'>
                                    <li><Link href="#" style={{ fontWeight: 600 }}>Servers</Link></li>
                                    <li><Link href="/server/dedicated-server-hosting-provider-in-chennai">Dedicated Server</Link></li>
                                    <li><Link href="/server/vps-hosting-provider-in-india">VPS Server</Link></li>
                                    <li><Link href="/server/cloud-hosting-companies-in-india">Cloud Server</Link></li>
                                    <li><Link href="/server/shared-server-hosting-in-chennai">Shared Server</Link></li>
                                    <li><Link href="/server/carbonio-email-hosting-in-chennai">Reseller Server</Link></li>
                                    <li><Link href="#" style={{ fontWeight: 600 }}>Spam Filter</Link></li>
                                    <li><Link href="/server/incoming-spam-filter">Incoming Spam Filter</Link></li>
                                    <li><Link href="/server/outgoing-spam-filter">Outgoing Spam Filter</Link></li>
                                    <li><Link href="#" style={{ fontWeight: 600 }}>Insights</Link></li>
                                    <li><Link href="#">Docs</Link></li>
                                    <li><Link href="#">Blogs</Link></li>
                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Footer Top -->
                <!-- Copyright --> */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="copyright-content">
                                    <p>© Copyright 2024  |  All Rights Reserved by <Link href="#" target="_blank">Sixthstar tech</Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Copyright --> */}
            </footer>
          </div></div>
  )
}
