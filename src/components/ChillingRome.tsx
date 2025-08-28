import { useState } from 'preact/hooks'
import '../chilling-rome.css'

export function ChillingRome() {
    const [searchForm, setSearchForm] = useState({
        destination: '',
        checkin: '',
        checkout: '',
        style: '',
        budget: '',
    })

    const handleInputChange = (field: string, value: string) => {
        setSearchForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSearch = () => {
        console.log('Search form:', searchForm)
    }

    return (
        <div>
            {/* Header */}
            <header>
                <nav>
                    <div class='container-fluid'>
                        <div class='row'>
                            <div class='col-1 text-light p-3'>
                                <div class='row'>
                                    <div class='col-12 d-flex justify-content-end'>
                                        <div style='height: 10px; border-bottom: 2px solid #fff; width: 50px;'></div>
                                    </div>
                                    <div class='col-12 mb-3'>
                                        <p></p>
                                    </div>
                                    <div class='col-12 mb-3'>
                                        <p></p>
                                    </div>
                                    <div class='col-12 mb-2'>
                                        <p></p>
                                    </div>
                                    <div class='col-12 mt-0 mb-1'>
                                        <div class='row'>
                                            <div class='col-12 d-flex justify-content-end'>
                                                <i class='fab fa-instagram rotate'></i>
                                            </div>
                                            <br />
                                            <div class='col-12 d-flex justify-content-end mt-2'>
                                                <i class='fab fa-twitter rotate'></i>
                                            </div>
                                            <br />
                                            <div class='col-12 d-flex justify-content-end mt-2'>
                                                <i class='fab fa-facebook-f rotate'></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='col-12 mt-1 mb-0'>
                                        <div style='height: 10px; border-right: 2px solid #fff; height: 50px; width: 97%;'></div>
                                    </div>
                                    <div class='col-12 mt-0 mb-0'>
                                        <div style='height: 10px; border-right: 2px solid #fff; height: 50px; width: 97%;'></div>
                                    </div>
                                    <div class='col-12'>
                                        <p></p>
                                    </div>
                                    <div class='col-12'>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class='col-2 text-light p-3'>
                                <p>
                                    info@travel.com
                                    <br />
                                    call: +44 3245321
                                </p>
                                <div class='row'>
                                    <div class='col-12'>
                                        <p></p>
                                    </div>
                                    <div class='col-12'>
                                        <p></p>
                                    </div>
                                    <div class='col-12'>
                                        <p></p>
                                    </div>
                                    <div class='col-12'>
                                        <p></p>
                                    </div>
                                    <div class='col-12 d-flex justify-content-center'>
                                        <p class='chill' style='font-size: 64px; color: #8E1F2F;'>
                                            in Rome
                                        </p>
                                    </div>
                                    <div class='col-12 d-flex justify-content-center'>
                                        <button class='btn btn-success' style='font-weight: 400;'>
                                            Booking trip just $199
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class='col-6 text-light p-3 d-flex justify-content-center'>
                                <h1 class='chill' style='font-size: 80px;'>
                                    <span id='C'>C</span>hilling
                                </h1>
                            </div>
                            <div class='col-3 d-flex justify-content-end p-3'>
                                <div class='row text-light'>
                                    <div class='col-7 d-flex justify-content-end'>
                                        <div style='height: 10px; border-bottom: 2px solid #fff; width: 50px;'></div>
                                    </div>
                                    <div id='menu' class='col-5'>
                                        <div class='row'>
                                            <div class='col-12 d-flex justify-content-start'>
                                                <p>MENU +</p>
                                            </div>
                                            <div class='col-12'>
                                                <p>TOUR +</p>
                                            </div>
                                            <div class='col-12'>
                                                <p>HOTEL</p>
                                            </div>
                                            <div class='col-12'>
                                                <p>EVENT</p>
                                            </div>
                                            <div class='col-12'>
                                                <p>BLOG +</p>
                                            </div>
                                            <div class='col-12'>
                                                <p>SHOP +</p>
                                            </div>
                                            <div class='col-12'>
                                                <p>INFO +</p>
                                            </div>
                                            <div class='col-12'>
                                                <p>ELEMENTS +</p>
                                            </div>
                                        </div>
                                        <div class='row'>
                                            <div class='col-12'>
                                                <i class='fas fa-search d-flex justify-content-center'></i>
                                                <br />
                                                <i class='fas fa-shopping-basket d-flex justify-content-center'></i>
                                                <br />
                                                <i class='fas fa-user-circle d-flex justify-content-center'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class='framer' style='position: sticky;'>
                    <img src='/images/frame_down.png' alt='Chilling' class='img-fluid' style='width: 100%;' />
                </div>
            </header>

            {/* Main Section 1 */}
            <main>
                <div class='container'>
                    <div class='row'>
                        <div class='col-12 col-sm-6'>
                            <div class='row'>
                                <div class='col-12' id='main1'>
                                    <div id='insideMain1'>
                                        <div class='row'>
                                            <div class='col-12 mt-5'>
                                                <div class='row'>
                                                    <div class='col-3 d-flex justify-content-end m-0 p-0'>
                                                        <div style='border-bottom: 5px solid #fff;height: 29px;width: 70%;'></div>
                                                    </div>
                                                    <div class='col-6 d-flex justify-content-end'>
                                                        <h1 class='plan'>PLAN YOUR</h1>
                                                    </div>
                                                    <div class='col-3 d-flex justify-content-start'>
                                                        <h1 class='trip'>Trip</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='col-12'>
                                                <p></p>
                                            </div>
                                            <div class='col-12'>
                                                <div class='row'>
                                                    <div class='col-12 col-sm-6'>
                                                        <div class='row'>
                                                            <div class='col-12'>
                                                                <h5 class='where'>Where</h5>
                                                            </div>
                                                            <div class='col-12 d-flex justify-content-center'>
                                                                <input
                                                                    type='text'
                                                                    class='form-control'
                                                                    placeholder='your destination'
                                                                    value={searchForm.destination}
                                                                    onInput={(e) =>
                                                                        handleInputChange(
                                                                            'destination',
                                                                            (e.target as HTMLInputElement).value,
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='col-12 col-sm-6'>
                                                        <div class='row'>
                                                            <div class='col-12'>
                                                                <h5 class='when'>When</h5>
                                                            </div>
                                                            <div class='col-12 d-flex justify-content-center'>
                                                                <input
                                                                    type='text'
                                                                    class='form-control'
                                                                    placeholder='check in'
                                                                    value={searchForm.checkin}
                                                                    onInput={(e) =>
                                                                        handleInputChange(
                                                                            'checkin',
                                                                            (e.target as HTMLInputElement).value,
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                            <div class='col-12 d-flex justify-content-center pt-1'>
                                                                <input
                                                                    type='text'
                                                                    class='form-control'
                                                                    placeholder='check out'
                                                                    value={searchForm.checkout}
                                                                    onInput={(e) =>
                                                                        handleInputChange(
                                                                            'checkout',
                                                                            (e.target as HTMLInputElement).value,
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='col-12'>
                                                <p></p>
                                            </div>
                                            <div class='col-12'>
                                                <div class='row'>
                                                    <div class='col-12 col-sm-6'>
                                                        <div class='row'>
                                                            <div class='col-12'>
                                                                <h5 class='styless1'>Which of styles</h5>
                                                            </div>
                                                            <div class='col-12 d-flex justify-content-center'>
                                                                <input
                                                                    type='text'
                                                                    class='form-control'
                                                                    placeholder='style'
                                                                    value={searchForm.style}
                                                                    onInput={(e) =>
                                                                        handleInputChange(
                                                                            'style',
                                                                            (e.target as HTMLInputElement).value,
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='col-12 col-sm-6'>
                                                        <div class='row'>
                                                            <div class='col-12'>
                                                                <h5 class='styless2'>How much</h5>
                                                            </div>
                                                            <div class='col-12 d-flex justify-content-center'>
                                                                <input
                                                                    type='text'
                                                                    class='form-control'
                                                                    placeholder='your budget'
                                                                    value={searchForm.budget}
                                                                    onInput={(e) =>
                                                                        handleInputChange(
                                                                            'budget',
                                                                            (e.target as HTMLInputElement).value,
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='col-12'>
                                                <p></p>
                                            </div>
                                            <div class='col-12 d-flex justify-content-center'>
                                                <button
                                                    type='button'
                                                    class='btn btn-outline-dark'
                                                    style='border: 2px solid #8E1F2F; background-color: #f0bc42; color: #8E1F2F; font-weight: 500; font-size: 1.1rem; border-radius: 15px;'
                                                    onClick={handleSearch}
                                                >
                                                    Search
                                                </button>
                                            </div>
                                            <div class='col-12'>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='row'>
                                    <div class='col-11 p-3'>
                                        <h5 style="text-align:left; font-family: 'Satisfy', cursive; color: #8E1F2F; font-weight: 600;">
                                            I am slightly embarrassed to say that I love inspirational travel quotes.
                                            They capture little moments of clarity that highlight the truths about
                                            travel, adventure, and life.
                                        </h5>
                                    </div>
                                    <div class='col-1'>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-12 col-sm-6'>
                            <div class='row'>
                                <div class='col-1'>
                                    <p></p>
                                </div>
                                <div class='col-2'>
                                    <h1 class='above'>
                                        1.<span class='below'>TOURS</span>
                                    </h1>
                                </div>
                                <div class='col-1'>
                                    <p></p>
                                </div>
                                <div class='col-2'>
                                    <h1 class='above'>
                                        2.<span class='below'>HOTELS</span>
                                    </h1>
                                </div>
                                <div class='col-6'>
                                    <p></p>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col-12 p-4' id='main2'>
                                    <div class='row'>
                                        <div class='col-12'>
                                            <div style='border-top: 8px solid #fff; border-left: 8px solid #fff; border-right: 8px solid #fff; height: 70px;'></div>
                                        </div>
                                        <div class='col-12 col-sm-6 d-flex justify-content-start '>
                                            <div style='border-left: 8px solid #fff; height: 100%;'></div>
                                        </div>
                                        <div class='col-12 col-sm-6 d-flex justify-content-end p-0'>
                                            <h2 class='vatican'>Vatican City</h2>
                                        </div>
                                        <div class='col-12'>
                                            <div style='border-bottom: 8px solid #fff; border-left: 8px solid #fff; border-right: 8px solid #fff; height: 120px;'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Step 2 */}
            <div id='body2' class='container-fluid m-0 p-0'>
                <h1 class='text-center fw-bold' style='color: #8E1F2F; font-size: 64px; z-index: 10 !important;'>
                    step 2.
                </h1>
                <div class='row p-0 m-0'>
                    <div class='col-12 col-sm-6 p-0 m-0'>
                        <p></p>
                    </div>
                    <div class='col-12 col-sm-6 p-0 m-0 position-relative'>
                        <div class='row p-0 m-0 position-absolute top-100 start-0 translate-middle'>
                            <div class='col-12 p-0 m-0'>
                                <div class='line'></div>
                            </div>
                            <div class='col-12 p-0 m-0'>
                                <div class='line'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row p-0 m-0'>
                    <div class='col-6 offset-3 pt-5'>
                        <p class='h1 text-center rotate-90 rot'>Tour</p>
                    </div>
                    <div class='col-6 offset-3 pt-5'>
                        <p class='h1 text-center rotate-90 rot2'>POPULAR</p>
                    </div>
                </div>
            </div>

            {/* Step 3 Background */}
            <div id='body3' class='container-fluid m-0 p-0'>
                <img src='/images/frame_down.png' class='rot-img' alt='step2' />
                <div class='row p-0 m-0 align-items-end' style='height: 81%;'>
                    <div class='col-3'></div>
                    <div class='col-6' style='background-color: #fff;'>
                        <h1 class='text-center' style='color: #fff;'>
                            .
                        </h1>
                    </div>
                    <div class='col-3'></div>
                </div>
            </div>

            {/* Travel Destinations */}
            <div id='body4' class='container-fluid m-0 p-0'>
                <div class='row p-0 m-0 h-100 align-middle'>
                    <div class='col-3 phuket'>
                        <div class='row h-100'>
                            <div class='col-6 d-flex justify-content-end align-items-center'>
                                <i class='fas fa-arrow-left pb-4' style='font-size: 36px;'></i>
                            </div>
                            <div class='col-6 d-flex justify-content-start align-items-center'>
                                <div class='row'>
                                    <div class='col-12'>
                                        <h2 class='country'>Thailand</h2>
                                    </div>
                                    <div class='col-12'>
                                        <h1 class='city'>Phuket</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-6 text-center p-0 m-0' style='background-color: #fff;'>
                        <div class='row h-100'>
                            <div class='col-12 d-flex justify-content-center align-items-center'>
                                <div class='row h-100 m-0 p-0'>
                                    <div class='col-12'>
                                        <div class='row'>
                                            <div class='col-12'>
                                                <i class='fas fa-star' style='color: #8E1F2F;'></i>
                                                <i class='fas fa-star' style='color: #8E1F2F;'></i>
                                                <i class='fas fa-star' style='color: #8E1F2F;'></i>
                                                <i class='fas fa-star' style='color: #8E1F2F;'></i>
                                            </div>
                                        </div>
                                        <div class='row'>
                                            <div class='col-12'>
                                                <h1 class='text-center fw-bolder'>
                                                    San Pedro Rock
                                                    <br />
                                                    United Sates
                                                </h1>
                                            </div>
                                        </div>
                                        <div class='row'>
                                            <div class='col-12'>
                                                <p class='text-center sat'>
                                                    <span class='satSpan'>From:</span> Nov 20, 2023{' '}
                                                    <span class='satSpan'>to</span> Nov 27, 2023
                                                </p>
                                            </div>
                                        </div>
                                        <div class='row mx-5'>
                                            <div class='col-12'>
                                                <p class='text-center satDes'>
                                                    San Pedro Rock is a small island in the Caribbean Sea, located about
                                                    1.5 miles (2.4 km) off the coast of Belize, near the town of San
                                                    Pedro. It is part of the Belize Barrier Reef Reserve System.
                                                </p>
                                            </div>
                                        </div>
                                        <div class='row'>
                                            <div class='col-12'>
                                                <button type='button' class='btn btn-primary'>
                                                    Booking from $199
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-3 guraidhoo'>
                        <div class='row h-100'>
                            <div class='col-6 d-flex justify-content-end align-items-center'>
                                <div class='row'>
                                    <div class='col-12'>
                                        <h2 class='country text-end'>Maldives</h2>
                                    </div>
                                    <div class='col-12'>
                                        <h1 class='city text-end'>Guraidhoo</h1>
                                    </div>
                                </div>
                            </div>
                            <div class='col-6 d-flex justify-content-start align-items-center'>
                                <i class='fas fa-arrow-right pb-4' style='font-size: 36px;'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Summer Events Section */}
            <div id='body5' class='container-fluid m-0 p-0'>
                <div class='capa'>
                    <div class='row p-0 m-0 align-items-start h-auto'>
                        <div class='col-6 offset-3' style='background-color: #fff;'>
                            <h1 class='text-center' style='color: #fff;'>
                                .
                            </h1>
                        </div>
                    </div>
                    <div class='row m-0 p-0 pt-5'>
                        <div class='col-6 offset-6'>
                            <div class='row m-0 p-0'>
                                <div class='col-3'>
                                    <h1 class='text-start fw-bolder'>
                                        <span class='sat2 fw-normal'>Hot </span>EVENT
                                    </h1>
                                </div>
                                <div class='col-2'>
                                    <div class='middle-line'></div>
                                </div>
                                <div class='col-7 m-0 p-0'>
                                    <h1
                                        class='text-start fw-bold'
                                        style='font-size: 38px; color: #8E1F2F; z-index: -1; position: relative;'
                                    >
                                        step 3.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='container mt-5 palm'>
                        <div class='row'>
                            <div class='col-6 offset-3 mt-5 d-flex justify-content-center'>
                                <div class='bt'></div>
                            </div>
                        </div>
                        <div class='row m-0 p-0'>
                            <div class='col-6 offset-3 d-flex justify-content-center flex-column'>
                                <h1 class='text-center sat5'>Summer</h1>
                            </div>
                        </div>
                        <div class='row m-0 p-0'>
                            <div class='col-6 offset-3 d-flex justify-content-center'>
                                <p class='text-center sat52 p-0 m-0'>vacation</p>
                            </div>
                        </div>
                        <div class='row m-0 p-0'>
                            <div class='col-6 offset-3 d-flex justify-content-center'>
                                <div class='row m-0 p-0' style='width: 50%;'>
                                    <div
                                        class='col-6 d-flex justify-content-center m-0 p-0'
                                        style='border-left: 8px solid #fff;'
                                    >
                                        <p class='text-center p-0 m-0 sat100'>
                                            <span class='sat105'>10 %</span> OFF
                                        </p>
                                    </div>
                                    <div
                                        class='col-6 d-flex justify-content-center m-0 p-0'
                                        style='border-right: 8px solid #fff; align-items: center;'
                                    >
                                        <button type='button' class='btn btn-danger' style='height: 50px;'>
                                            More info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='row m-0 p-0'>
                            <div class='col-6 offset-3 d-flex justify-content-center'>
                                <div class='m-0 p-0 videoYT'>
                                    <iframe
                                        width='500'
                                        height='500'
                                        src='https://www.youtube.com/embed/xGRjCa49C6U?autoplay=0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                        title='Summer'
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section (Body6) */}
            <div id='body6' class='container-fluid m-0 p-0'>
                <div class='capa'>
                    <div class='row m-0 p-0 pt-5' style='padding-top: 12rem !important;'>
                        <div class='col-10 offset-2 d-flex justify-content-start align-items-center'>
                            <div class='row m-0 pt-5 w-100'>
                                <div class='col-3 offset-2 m-0 p-0'>
                                    <h1
                                        class='text-start fw-bold'
                                        style='font-size: 38px; color: #8E1F2F; z-index: -1; position: relative;'
                                    >
                                        step 4.
                                    </h1>
                                    <div class='linea'></div>
                                </div>
                                <div class='col-8 m-0 p-0'>
                                    <h1 class='text-start fw-bolder'>
                                        <span class='sat2 fw-normal'>Holiday </span>GALLERY
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class='row p-0 m-0 g-0 align-items-center justify-content-center'
                        style='padding-top: 4rem !important;'
                    >
                        <div class='col-1'>
                            <div class='div1'>
                                <div class='div21'>
                                    <div class='div211'></div>
                                    <div class='div212'>
                                        <p
                                            class='text-end'
                                            style='margin: 0rem; padding: 0rem; font-size: 0.9rem; font-weight: 700;'
                                        >
                                            1.
                                        </p>
                                    </div>
                                    <div class='div213'></div>
                                    <div class='div214'></div>
                                </div>
                            </div>
                        </div>
                        <div class='col-2'>
                            <div class='div2'>
                                <div class='div21'>
                                    <div class='div211'></div>
                                    <div class='div212'>
                                        <h1 class='text-end' style='margin-left: 10rem; padding: 0rem;'>
                                            2.
                                        </h1>
                                    </div>
                                    <div class='div213'></div>
                                    <div class='div214'></div>
                                </div>
                            </div>
                        </div>
                        <div class='col-6'>
                            <div class='div3'>
                                <div class='div21'>
                                    <div class='div211'></div>
                                    <div class='div212'>
                                        <h1
                                            class='text-end'
                                            style='margin-left: 12rem; padding: 0rem; font-size: 3em; padding-top: 2rem;'
                                        >
                                            3.
                                        </h1>
                                    </div>
                                    <div class='div213'></div>
                                    <div class='div214'></div>
                                </div>
                            </div>
                        </div>
                        <div class='col-2'>
                            <div class='div4'>
                                <div class='div21'>
                                    <div class='div211'></div>
                                    <div class='div212'>
                                        <h1 class='text-end' style='margin-left: 10rem; padding: 0rem;'>
                                            4.
                                        </h1>
                                    </div>
                                    <div class='div213'></div>
                                    <div class='div214'></div>
                                </div>
                            </div>
                        </div>
                        <div class='col-1'>
                            <div class='div5'>
                                <div class='div21'>
                                    <div class='div211'></div>
                                    <div class='div212'>
                                        <p
                                            class='text-end'
                                            style='margin: 0rem; padding: 0rem; font-size: 0.9rem; font-weight: 700;'
                                        >
                                            5.
                                        </p>
                                    </div>
                                    <div class='div213'></div>
                                    <div class='div214'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Summer Outfit Section (Body7) */}
            <div id='body7' class='container-fluid m-0 p-0'>
                <div class='row m-0 p-0' style='background-color: #FAFBFB;'>
                    <div class='col-12 p-0 m-0'>
                        <h2 class='text-center'>
                            share:
                            <a href='https://www.facebook.com/'>
                                <i class='fab fa-facebook-square' style='color: #000;'></i>
                            </a>
                            <a href='https://www.instagram.com/'>
                                <i class='fab fa-instagram-square' style='color: #000;'></i>
                            </a>
                            <a href='https://twitter.com/'>
                                <i class='fab fa-twitter-square' style='color: #000;'></i>
                            </a>
                        </h2>
                    </div>
                </div>
                <div class='row m-0 p-0 pt-2 justify-content-center' style='background-color: #FAFBFB; z-index: 1;'>
                    <div class='col-1 p-0 m-0'>
                        <h1 class='text-end sat71'>final</h1>
                    </div>
                    <div class='col-1 p-0 m-0 align-self-center' style='margin-left: -1.75rem !important; z-index:20;'>
                        <div style='border-top: 2px solid #000'></div>
                    </div>
                    <div class='col-3 p-0 m-0'>
                        <h1 class='text-start sat72 fw-bolder'>
                            <span class='sat73'>Summer</span> OUTFIT
                        </h1>
                    </div>
                </div>
                <div class='row m-0 p-0'>
                    <img src='/images/frame_down.png' class='rot-img' alt='step2' />
                </div>
                <div class='container p-0'>
                    <div class='row gx-2' style='height: 450px;'>
                        <div class='col-3'>
                            <div class='col-12 text-center h-100' style='background-color:#FAFBFB;'>
                                <h3 class='text-center fw-bold p-3 h-25'>PRINTED SWIM SHORTS</h3>
                                <img src='/images/swimshorts.png' class='img-fluid p-3 h-50' alt='shorts' />
                                <button type='button' class='btn btn-primary btn-outline-dark btn-lg btn-block p-3'>
                                    Buy for $19.99
                                </button>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class='col-12 text-center h-100' style='background-color:#FAFBFB;'>
                                <h3 class='text-center fw-bold p-3 h-25'>SUNGLASSES</h3>
                                <img src='/images/glasses.png' class='img-fluid p-3 h-50' alt='glasses' />
                                <button type='button' class='btn btn-primary btn-outline-dark btn-lg btn-block p-3'>
                                    Buy for $19.99
                                </button>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class='col-12 text-center h-100' style='background-color:#FAFBFB;'>
                                <h3 class='text-center fw-bold p-3 h-25'>PRINTED SWIMSUIT</h3>
                                <img src='/images/swimsuit.png' class='img-fluid p-3 h-50' alt='swimsuit' />
                                <button type='button' class='btn btn-primary btn-outline-dark btn-lg btn-block p-3'>
                                    Buy for $26.99
                                </button>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class='col-12 text-center h-100' style='background-color:#FAFBFB;'>
                                <h3 class='text-center fw-bold p-3 h-25'>CAT'S EYE SUNGLASSES</h3>
                                <img src='/images/glasses2.png' class='img-fluid p-3 h-50' alt='glasses2' />
                                <button type='button' class='btn btn-primary btn-outline-dark btn-lg btn-block p-3'>
                                    Buy for $19.99
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row m-0 p-0'>
                    <div class='col-12 p-0 m-0 d-flex justify-content-center align-items-end'>
                        <img src='/images/frame_down.png' class='img-norot' alt='stepfinal' />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <div class='container-fluid'>
                    <div class='row m-0 p-0'>
                        <div class='col-6 col-sm-2'>
                            <img src='/images/castello.jpg' alt='spotify' class='img-fluid' />
                        </div>
                        <div class='col-6 col-sm-2'>
                            <img src='/images/coloseo.jpg' alt='apple music' class='img-fluid' />
                        </div>
                        <div class='col-6 col-sm-2'>
                            <img src='/images/imagen1.jpg' alt='youtube' class='img-fluid' />
                        </div>
                        <div class='col-6 col-sm-2'>
                            <img src='/images/castello.jpg' alt='instagram' class='img-fluid' />
                        </div>
                        <div class='col-6 col-sm-2'>
                            <img src='/images/trevi.jpg' alt='facebook' class='img-fluid' />
                        </div>
                        <div class='col-6 col-sm-2'>
                            <img src='/images/castello.jpg' alt='twitter' class='img-fluid' />
                        </div>
                    </div>
                </div>
                <div id='insta' class='d-flex justify-content-center'>
                    <button type='button' class='btn btn-outline-light' style='height: 50px;'>
                        <i class='fab fa-instagram'></i>
                        <span style='font-size: 20px;'>Instagram</span>
                    </button>
                </div>
                <div id='searchBar' class='container-fluid justify-content-center bg-dark p-3'>
                    <div class='row text-center'>
                        <div class='col-12 col-sm-3'></div>
                        <div class='col-12 col-sm-2'>
                            <h3 style='color: #fff;'>KEEP IN TOUCH</h3>
                        </div>
                        <div class='col-12 col-sm-4 d-flex justify-content-center'>
                            <div class='input-group'>
                                <input
                                    type='text'
                                    class='form-control'
                                    placeholder='Email address'
                                    aria-label='Email address'
                                    aria-describedby='button-addon2'
                                />
                                <button class='btn btn-outline-light' type='button' id='button-addon2'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div class='col-12 col-sm-3'></div>
                    </div>
                </div>
                <div id='info'>
                    <div class='row text-center m-0 p-0'>
                        <div class='col-12 col-sm-12 p-5'>
                            <h2 class='chill' style='font-size: 80px;'>
                                <span id='C'>C</span>hilling
                            </h2>
                        </div>
                        <div class='col-12 col-sm-12'>
                            <p class='chill' style='font-size: 20px;'>
                                A silky refined minimalist travel website.
                                <br />
                                Beautiful places & Beautiful holidays.
                            </p>
                        </div>
                        <div class='col-12 col-sm-12'>
                            <i class='fab fa-facebook-f'></i>
                            <i class='fab fa-instagram'></i>
                            <i class='fab fa-twitter'></i>
                            <i class='fab fa-youtube'></i>
                            <i class='fab fa-pinterest'></i>
                            <i class='fab fa-google-plus-g'></i>
                        </div>
                        <div class='row text-center text-light p-5'>
                            <div class='col-12 col-sm-2'></div>
                            <div class='col-12 col-sm-2'>
                                <i class='fa-solid fa-phone' style='font-size:30px;'></i>
                                <p>Booking line: 8 a.m - 22 p.m</p>
                                <h4>+44 3245321</h4>
                            </div>
                            <div class='col-12 col-sm-2'>
                                <i class='fa-solid fa-envelope' style='font-size:30px;'></i>
                                <p>Email support</p>
                                <h4>info@travel.com</h4>
                            </div>
                            <div class='col-12 col-sm-2'>
                                <i class='fa-brands fa-skype' style='font-size:30px; color: #00aff0;'></i>
                                <p>Support center</p>
                                <h4>Contact Skype</h4>
                            </div>
                            <div class='col-12 col-sm-2'>
                                <i class='fa-solid fa-question' style='font-size:30px;'></i>
                                <p>Keep in touch</p>
                                <h4>Send question</h4>
                            </div>
                            <div class='col-12 col-sm-2'></div>
                        </div>
                        <div style='width: 75%; margin: 0 auto; border-bottom: 2px solid #fff;'></div>
                        <div class='col-12 col-sm-12 text-center text-light p-5'>
                            <p class='copy'>
                                Copyright © 2023. Chilling made by <span style='color: #8E1F2F;'>Ion</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
