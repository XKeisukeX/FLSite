import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
export default function Resources() {
    return (
        <div className="bg-primary/5">
            <div className="bg-primary/20">
              <div className="py-10 px-4 text-center">
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-primary">Frontend Learning Resources</h2>
              </div>
            </div>
            <div className="bg-primary/5">
                <div className="max-w-screen-xl mx-auto py-16 md:px-10 lg:px-20 px-4">
                    <div className='flex md:flex-row flex-col md:items-start items-center text-center md:text-left md:gap-[10%] gap-8 py-10'>
                      <div>
                      <img className="w-36 h-36 rounded-lg mb-5 -rotate-12 hover:rotate-0 ease-in duration-200" src={HTML} alt="" />
                        <div className="w-36 h-[13px] rounded-[100%] bg-black/30"></div>
                      </div>
                      <div>
                        <div className='flex items-center md:justify-start justify-center md:flex-row flex-col-reverse md:gap-3 md:mb-3'>
                          <div className='h-10 w-1.5 bg-primary md:rotate-0 rotate-90'></div>
                          <h2 className='text-3xl font-bold text-primary'>HTML</h2>
                        </div>
                        <p className='leading-relaxed font-semibold text-sm text-gray-600 lg:w-4/5 mb-5 text-left'>Explore HTML tutorials, documentation, and examples from trusted platforms. Websites like MDN Web Docs, W3Schools, and CSS-Tricks offer valuable resources for mastering HTML markup and web development basics.</p>
                        <ul>
                          <h4 className='font-semibold mb-3 text-primary text-left text-xl'>Source:</h4>
                          <div className='pl-10 text-left'>
                            <li className='list-disc'>
                              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className='text-primary/90 text-sm font-medium underline'>
                                  MDN Web Docs
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.w3schools.com/html/" className='text-primary/90 text-sm font-medium underline'>
                                  W3Schools HTML Tutorial
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.htmldog.com/" className='text-primary/90 text-sm font-medium underline'>
                                  HTML Dog
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.freecodecamp.org/news/html-crash-course/" className='text-primary/90 text-sm font-medium underline'>
                                  freeCodeCamp HTML Tutorial
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://web.dev/" className='text-primary/90 text-sm font-medium underline'>
                                  HTML5 Rocks
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>

                    <div className='flex md:flex-row flex-col md:items-start items-center text-center md:text-left md:gap-[10%] gap-8 py-10'>
                      <div>
                        <img className="w-36 h-36 rounded-lg mb-5 -rotate-12 hover:rotate-0 ease-in duration-200" src={CSS} alt="" />
                        <div className="w-36 h-[13px] rounded-[100%] bg-black/30"></div>
                      </div>
                      <div>
                        <div className='flex items-center md:justify-start justify-center md:flex-row flex-col-reverse md:gap-3 md:mb-3'>
                          <div className='h-10 w-1.5 bg-primary md:rotate-0 rotate-90'></div>
                          <h2 className='text-3xl font-bold text-primary'>CSS</h2>
                        </div>
                        <p className='leading-relaxed font-semibold text-sm text-gray-600 lg:w-4/5 mb-5 text-left'>Discover CSS tutorials, documentation, and examples from reputable platforms like MDN Web Docs, W3Schools, and CSS-Tricks. These resources offer valuable insights for mastering CSS styling and web design fundamentals.</p>
                        <ul>
                          <h4 className='font-semibold mb-3 text-primary text-left text-xl'>Source:</h4>
                          <div className='pl-10 text-left'>
                            <li className='list-disc'>
                              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className='text-primary/90 text-sm font-medium underline'>
                                  MDN Web Docs
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.w3schools.com/css/" className='text-primary/90 text-sm font-medium underline'>
                                  W3Schools HTML Tutorial
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://css-tricks.com/" className='text-primary/90 text-sm font-medium underline'>
                                  CSS-Tricks
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.freecodecamp.org/news/tag/css/" className='text-primary/90 text-sm font-medium underline'>
                                  freeCodeCamp CSS Tutorial
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.csszengarden.com/" className='text-primary/90 text-sm font-medium underline'>
                                  CSS Zen Garden
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>

                    <div className='flex md:flex-row flex-col md:items-start items-center text-center md:text-left md:gap-[10%] gap-8 py-10'>
                      <div>
                        <img className="w-36 h-36 rounded-lg mb-5 -rotate-12 hover:rotate-0 ease-in duration-200" src={Javascript} alt="" />
                        <div className="w-36 h-[13px] rounded-[100%] bg-black/30"></div>
                      </div>
                      <div>
                        <div className='flex items-center md:justify-start justify-center md:flex-row flex-col-reverse md:gap-3 md:mb-3'>
                          <div className='h-10 w-1.5 bg-primary md:rotate-0 rotate-90'></div>
                          <h2 className='text-3xl font-bold text-primary'>JAVASCRIPT</h2>
                        </div>
                        <p className='leading-relaxed font-semibold text-sm text-gray-600 lg:w-4/5 mb-5 text-left'>Access JavaScript tutorials, documentation, and examples from authoritative platforms such as MDN Web Docs, freeCodeCamp, and JavaScript.info. These resources provide valuable insights for mastering JavaScript programming and web development concepts.</p>
                        <ul>
                          <h4 className='font-semibold mb-3 text-primary text-left text-xl'>Source:</h4>
                          <div className='pl-10 text-left'>
                            <li className='list-disc'>
                              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className='text-primary/90 text-sm font-medium underline'>
                                  MDN Web Docs - JavaScript
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.freecodecamp.org/news/learn-javascript-free-js-courses-for-beginners/" className='text-primary/90 text-sm font-medium underline'>
                                  freeCodeCamp JavaScript Curriculum
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://javascript.info/" className='text-primary/90 text-sm font-medium underline'>
                                  JavaScript.info
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.codecademy.com/catalog/language/javascript?g_network=g&g_productchannel=&g_adid=624951457627&g_locinterest=&g_keyword=codecademy%20javascript&g_acctid=243-039-7011&g_adtype=&g_keywordid=aud-726551140688:kwd-320553373431&g_ifcreative=&g_campaign=account&g_locphysical=20841&g_adgroupid=128133970508&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=1726903838&g_ifproduct=&utm_id=t_aud-726551140688:kwd-320553373431:ag_128133970508:cp_1726903838:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy%20javascript&utm_campaign=INTL_Brand_Exact&utm_content=624951457627&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqrPQjuBuw5im5lYLNDpSvVCVlSOPKfa3kHjPLfA1Zo8kjkE0jvtuNxoCENAQAvD_BwE" className='text-primary/90 text-sm font-medium underline'>
                                  Codecademy JavaScript
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://eloquentjavascript.net/" className='text-primary/90 text-sm font-medium underline'>
                                  Eloquent JavaScript
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>

                    <div className='flex md:flex-row flex-col md:items-start items-center text-center md:text-left md:gap-[10%] gap-8 py-10'>
                      <div>
                        <img className="w-36 h-36 rounded-lg mb-5 -rotate-12 hover:rotate-0 ease-in duration-200" src={Tailwind} alt="" />
                        <div className="w-36 h-[13px] rounded-[100%] bg-black/30"></div>
                      </div>
                      <div>
                        <div className='flex items-center md:justify-start justify-center md:flex-row flex-col-reverse md:gap-3 md:mb-3'>
                          <div className='h-10 w-1.5 bg-primary md:rotate-0 rotate-90'></div>
                          <h2 className='text-3xl font-bold text-primary'>Tailwind</h2>
                        </div>
                        <p className='leading-relaxed font-semibold text-sm text-gray-600 lg:w-4/5 mb-5 text-left'>Access JavaScript tutorials, documentation, and examples from authoritative platforms such as MDN Web Docs, freeCodeCamp, and JavaScript.info. These resources provide valuable insights for mastering JavaScript programming and web development concepts.</p>
                        <ul>
                          <h4 className='font-semibold mb-3 text-primary text-left text-xl'>Source:</h4>
                          <div className='pl-10 text-left'>
                            <li className='list-disc'>
                              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className='text-primary/90 text-sm font-medium underline'>
                                  MDN Web Docs - JavaScript
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.freecodecamp.org/news/learn-javascript-free-js-courses-for-beginners/" className='text-primary/90 text-sm font-medium underline'>
                                  freeCodeCamp JavaScript Curriculum
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://javascript.info/" className='text-primary/90 text-sm font-medium underline'>
                                  JavaScript.info
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://www.codecademy.com/catalog/language/javascript?g_network=g&g_productchannel=&g_adid=624951457627&g_locinterest=&g_keyword=codecademy%20javascript&g_acctid=243-039-7011&g_adtype=&g_keywordid=aud-726551140688:kwd-320553373431&g_ifcreative=&g_campaign=account&g_locphysical=20841&g_adgroupid=128133970508&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=1726903838&g_ifproduct=&utm_id=t_aud-726551140688:kwd-320553373431:ag_128133970508:cp_1726903838:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy%20javascript&utm_campaign=INTL_Brand_Exact&utm_content=624951457627&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqrPQjuBuw5im5lYLNDpSvVCVlSOPKfa3kHjPLfA1Zo8kjkE0jvtuNxoCENAQAvD_BwE" className='text-primary/90 text-sm font-medium underline'>
                                  Codecademy JavaScript
                              </a>
                            </li>
                            <li className='list-disc'>
                              <a href="https://eloquentjavascript.net/" className='text-primary/90 text-sm font-medium underline'>
                                  Eloquent JavaScript
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    )
}