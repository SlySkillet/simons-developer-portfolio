import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiFastapi
        , SiReact
        , SiPython
        , SiJavascript
        , SiPostgresql
        , SiGooglecloud
        , SiPlotly
        , SiDocker } from 'react-icons/si'
import { TbBrandDjango } from "react-icons/tb";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel';


function Projects(){
    const [showPlunge, setShowPlunge] = useState(false)
    const [showRadCar, setShowRadCar] = useState(false)
    const [showTaskManager, setShowTaskManager] = useState(false)
    const [windowWidth, setWindowWidth] = useState([
        window.innerWidth
    ])

    const handleClosePlunge = () => setShowPlunge(false)
    const handleShowPlunge = () => setShowPlunge(true)
    const handleCloseRadCar = () => setShowRadCar(false)
    const handleShowRadCar = () => setShowRadCar(true)
    const handleCloseTaskManager = () => setShowTaskManager(false)
    const handleShowTaskManager = () => setShowTaskManager(true)

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth([window.innerWidth])
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const numberColumns = windowWidth > 1360 ? 2 : 1
    console.log(windowWidth)

    if (numberColumns === 2){
        return(
            <div className="projects-container">
                <h2 className="project-title">Projects</h2>
                <div className="project-container left">
                    <div className="project-content">
                        <div className="project-header">
                        <h5 className="project-description title">Plunge</h5>
                        <p className="shaded-text">August, 2023</p>
                        </div>
                        <div className="screenshots-container">
                            <Button onClick={handleShowPlunge}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc9IXcla3j_qkN3VMWsveeyFUoD7whfzX7AfNdZgkGtZK1lkDr65j2JrSW1Z6ivALR_dVIZqtahDm9dhJOICZX9zvA3rZmDsllfe7PQ_Ikk5kLDS8of7zgb0aY82tAAcSkyit0Jz38JazjdPlxrm8IMZLf7msQO-rLadzlYqjALbFyIjCbL2RotTXN_vsJlUGObSYIIA1oECbFBG0jvVI_NiKTCakfILOaoV1M6DheC4sKKNhabHqd9o_At53BfeAYbHIwQWp4dZO2tE0MbNcC31rOQfjJi3gYwez4oFHC5Zhg5H7d1eSaMrtlkc70BmwY1GTC4d99iOr3FjPps9HFXGuLXaqBI8ZVgv6Ak1RnvKNzMD3OuEg2QmMRa5JbF7GuA_4U_Kk_HMrFZExRgHMT6xEKbSyqNxvWUcSrE9IRSHQZG6V2b405j9yPoYEVxrCwzbuZAcWSqTYheRTpdCNOJOJv6IcnTPjALTwgPXbK5zmd5zGObTTm9xOz48PlRUlUShfckH8MA14Jf8hulIpUCTeIkZicb2gNMfJXnKD2sYdoSDFOPTQz1R7nONMrmPwkdVJND5oog7M6P0JS3rPLck_T6mS4-rhDHR5BNO12nQm3sLskr8sCSXA3sxWQuVIqeCZe98EGvkbmkhmDPRnluvo6TN1aJGgliaEwQGKZyVzJ0lJO0Fr8qpqJFzZJe-f3Rxv-YuB94zNcmRI3wWbQO0O9vP1edUbaZ4xi_HGfINtcB8I6sdiUsPGM0a5L2PUZ2dAUuKyzGCFj8m_qdDCPs5AhNvFQz0zzlzqHh1iU4sZg1lsLQ0dVwtqmjJp6eG0cwf-pN58nZ2G7_UdODX669kYW8jhLMFLmtXC0EEQDWn-5KhsQqdl0LBiIUYhfI45uc5R8cTiM7anrDzyjiQqA=w867-h938-s-no?authuser=0"} alt="main page" width="170"/>
                            </Button>
                            <Button onClick={handleShowPlunge}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc-LuQT8nmZYtZabhxqp3MPbn7jvWkuw-blw6VmSOu62tlsuZB0vU7IgDILPgJMz0-11G5pVpzMjbWfKIHQ8VBqFScKoQsOfnIFDfjDWvdgnSYG5b4MWWzxA515EYWXaHd3PpQ-o0GdgQG2u624bT5inJKeqzFcuxWtoMI83DWSXIKj5uwWe_NXxe2CUs_DvujXV9rmqhzzGcsNpgxinCkIx5eoriz2Featdplvqt_pA1WDvHMRFUWrhSV4IwGJrl1mJTxBiOeHxn9WXvLJQYt86LjTr6Bb6Cgp5OzSeRyPOxoKh_IHBe7cSRcAEnRgb8L2m9RknPRXF66cUJzdl9AGx80Cv_Rkk5H4b2qn1Q4YRQZTuxK6qem-SnFFMyUHUK4fcXBpa4szfEjwwmhgf9vs5uP01yMjnp5f2L6ziO0aoaq-Meq5lf8EK692zALWqWaV0dcHvDRlLd3mkmTb_g_us7BS0BzL0xDNogaCK9Ji4uDXVgV4HpawidH-4qzNGCYD_9cs_LeDzAhMaQ23pBuIQ5p_KLyUZtm4BV5NKdnt-5ipgIO3pLUfer9XiWkxiolBxciPdvnCq9uIOjYlOjikp57M9PTqycg9k4xqiAeGzV1ttlu4iCbsLtFRnSMN-rGYDNqoqAuNQMyPOj0IZ2DBD8djklWsmuuJtoVryjF2cBSiKY2K49NbGAGzCirmOZaU6n9Azljg9uPYrKCQdmZ8SXe58A5iKkn4r4PN9ua71siF2mcagdc0PhVMjSo4BTD6rwOi09J-i1K6tzvOEA_GOGs4e480IUwfFwvMhOeUL3Dc8RZ22EOhZq_y1qOCQ1NyT_3HKI0FsMOWo4NIhRqRSQ3_sS9UUVapUsLoyz6aViWmJlHbL8eTwWxTKltGkhQ37-fBgg3HUm_qIdsp-7g=w865-h938-s-no?authuser=0"} alt="location page" width="170"/>
                            </Button>
                            <Button onClick={handleShowPlunge}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc9BLelU3-iAhcsp0G-PJ_IEL3qvhpCq02qxYfWyFw8LdR56EVjJSlxFeQqVclZCet-MoJBhneqf3pjLsHrbXFuy28v4RBX9aDvVrvXdkonxQmaQ8Ed-Xsq-fn3-zZb5SuN9zLIgeVWp0afIbyF6l0iO478o4eguxKUyvqitEHPO1jG1Swh0fOezWqH20ScILVf66WyvH4aImzV5hvTReZssAm_YWJyj_gS_CmgrW6RueHHsOv01BUOJvi7jEax_xqzzyzH9Ae_WIm75qZ1GupOLeLltenMW0DOVLaM-FXyYfqW_yF5S8KMUHkVX3qiVLoEykjIS0S7-dalmmxqQTH04Ezc0OtKP7Bw83ZBZvzgvQRgSAbGpiZs0flGHHvh7O5D99iqaXhWpFrt0s0VlxI19kiEqDB9mIxxk8TfvUGi_CWl1WUhOAl2bYTLqlWUmTqkUpZlHiZ9codUx__2NDib--DSFxh_F-yI4RsoXvrn3f9-bcBQqK8LJ7YIyhciZdhrVMm_d9ycFUNTwjTJUeRkV0vUbpYUIpAvx-5iXbGVvugl9hjFy5vSNA6iA1y6oEM-ypvggCvgjzxu2-yyWimCpj0Gw127odrYGXfQuZeZxnOkaLa9SETaKazNiQDlGvABasGoI0LEDB3osfELK7cBkLKmuxPzSlakAsQ6WOSz14ULEHx1XqWjt7tFmPMDCvZeCmfJ9J1xdnYDkjjrhLxqLUvkK6PacjtwV-WWRse2MiEEztzg9Uhs5NvBIEOedK6JL2lKzvBdHCSNmIBIGFa_-hvv3YE8uarobjvmDQ7qEq4WwieJpsHlqVAFdJ0f3RkzSwY187UIE9I12CsmmTX7MOJf_8vKMqRC4vVTMyZBmm5QX9Zqej4MIul6QYMnqRhsCys3gPoK_4CMW5vZQXw=w282-h306-no?authuser=0"} alt="categories page" width="170"/>
                            </Button>
                        </div>
                        <Modal show={showPlunge} onHide={handleClosePlunge} size="xl">
                                <Modal.Header closeButton>
                                <Modal.Title>Plunge</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Carousel data-bs-theme="dark" indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc9IXcla3j_qkN3VMWsveeyFUoD7whfzX7AfNdZgkGtZK1lkDr65j2JrSW1Z6ivALR_dVIZqtahDm9dhJOICZX9zvA3rZmDsllfe7PQ_Ikk5kLDS8of7zgb0aY82tAAcSkyit0Jz38JazjdPlxrm8IMZLf7msQO-rLadzlYqjALbFyIjCbL2RotTXN_vsJlUGObSYIIA1oECbFBG0jvVI_NiKTCakfILOaoV1M6DheC4sKKNhabHqd9o_At53BfeAYbHIwQWp4dZO2tE0MbNcC31rOQfjJi3gYwez4oFHC5Zhg5H7d1eSaMrtlkc70BmwY1GTC4d99iOr3FjPps9HFXGuLXaqBI8ZVgv6Ak1RnvKNzMD3OuEg2QmMRa5JbF7GuA_4U_Kk_HMrFZExRgHMT6xEKbSyqNxvWUcSrE9IRSHQZG6V2b405j9yPoYEVxrCwzbuZAcWSqTYheRTpdCNOJOJv6IcnTPjALTwgPXbK5zmd5zGObTTm9xOz48PlRUlUShfckH8MA14Jf8hulIpUCTeIkZicb2gNMfJXnKD2sYdoSDFOPTQz1R7nONMrmPwkdVJND5oog7M6P0JS3rPLck_T6mS4-rhDHR5BNO12nQm3sLskr8sCSXA3sxWQuVIqeCZe98EGvkbmkhmDPRnluvo6TN1aJGgliaEwQGKZyVzJ0lJO0Fr8qpqJFzZJe-f3Rxv-YuB94zNcmRI3wWbQO0O9vP1edUbaZ4xi_HGfINtcB8I6sdiUsPGM0a5L2PUZ2dAUuKyzGCFj8m_qdDCPs5AhNvFQz0zzlzqHh1iU4sZg1lsLQ0dVwtqmjJp6eG0cwf-pN58nZ2G7_UdODX669kYW8jhLMFLmtXC0EEQDWn-5KhsQqdl0LBiIUYhfI45uc5R8cTiM7anrDzyjiQqA=w867-h938-s-no?authuser=0"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc-LuQT8nmZYtZabhxqp3MPbn7jvWkuw-blw6VmSOu62tlsuZB0vU7IgDILPgJMz0-11G5pVpzMjbWfKIHQ8VBqFScKoQsOfnIFDfjDWvdgnSYG5b4MWWzxA515EYWXaHd3PpQ-o0GdgQG2u624bT5inJKeqzFcuxWtoMI83DWSXIKj5uwWe_NXxe2CUs_DvujXV9rmqhzzGcsNpgxinCkIx5eoriz2Featdplvqt_pA1WDvHMRFUWrhSV4IwGJrl1mJTxBiOeHxn9WXvLJQYt86LjTr6Bb6Cgp5OzSeRyPOxoKh_IHBe7cSRcAEnRgb8L2m9RknPRXF66cUJzdl9AGx80Cv_Rkk5H4b2qn1Q4YRQZTuxK6qem-SnFFMyUHUK4fcXBpa4szfEjwwmhgf9vs5uP01yMjnp5f2L6ziO0aoaq-Meq5lf8EK692zALWqWaV0dcHvDRlLd3mkmTb_g_us7BS0BzL0xDNogaCK9Ji4uDXVgV4HpawidH-4qzNGCYD_9cs_LeDzAhMaQ23pBuIQ5p_KLyUZtm4BV5NKdnt-5ipgIO3pLUfer9XiWkxiolBxciPdvnCq9uIOjYlOjikp57M9PTqycg9k4xqiAeGzV1ttlu4iCbsLtFRnSMN-rGYDNqoqAuNQMyPOj0IZ2DBD8djklWsmuuJtoVryjF2cBSiKY2K49NbGAGzCirmOZaU6n9Azljg9uPYrKCQdmZ8SXe58A5iKkn4r4PN9ua71siF2mcagdc0PhVMjSo4BTD6rwOi09J-i1K6tzvOEA_GOGs4e480IUwfFwvMhOeUL3Dc8RZ22EOhZq_y1qOCQ1NyT_3HKI0FsMOWo4NIhRqRSQ3_sS9UUVapUsLoyz6aViWmJlHbL8eTwWxTKltGkhQ37-fBgg3HUm_qIdsp-7g=w865-h938-s-no?authuser=0"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc9BLelU3-iAhcsp0G-PJ_IEL3qvhpCq02qxYfWyFw8LdR56EVjJSlxFeQqVclZCet-MoJBhneqf3pjLsHrbXFuy28v4RBX9aDvVrvXdkonxQmaQ8Ed-Xsq-fn3-zZb5SuN9zLIgeVWp0afIbyF6l0iO478o4eguxKUyvqitEHPO1jG1Swh0fOezWqH20ScILVf66WyvH4aImzV5hvTReZssAm_YWJyj_gS_CmgrW6RueHHsOv01BUOJvi7jEax_xqzzyzH9Ae_WIm75qZ1GupOLeLltenMW0DOVLaM-FXyYfqW_yF5S8KMUHkVX3qiVLoEykjIS0S7-dalmmxqQTH04Ezc0OtKP7Bw83ZBZvzgvQRgSAbGpiZs0flGHHvh7O5D99iqaXhWpFrt0s0VlxI19kiEqDB9mIxxk8TfvUGi_CWl1WUhOAl2bYTLqlWUmTqkUpZlHiZ9codUx__2NDib--DSFxh_F-yI4RsoXvrn3f9-bcBQqK8LJ7YIyhciZdhrVMm_d9ycFUNTwjTJUeRkV0vUbpYUIpAvx-5iXbGVvugl9hjFy5vSNA6iA1y6oEM-ypvggCvgjzxu2-yyWimCpj0Gw127odrYGXfQuZeZxnOkaLa9SETaKazNiQDlGvABasGoI0LEDB3osfELK7cBkLKmuxPzSlakAsQ6WOSz14ULEHx1XqWjt7tFmPMDCvZeCmfJ9J1xdnYDkjjrhLxqLUvkK6PacjtwV-WWRse2MiEEztzg9Uhs5NvBIEOedK6JL2lKzvBdHCSNmIBIGFa_-hvv3YE8uarobjvmDQ7qEq4WwieJpsHlqVAFdJ0f3RkzSwY187UIE9I12CsmmTX7MOJf_8vKMqRC4vVTMyZBmm5QX9Zqej4MIul6QYMnqRhsCys3gPoK_4CMW5vZQXw=w282-h306-no?authuser=0"
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                        </Modal>
                        <div className="tech-icons-container">
                            <SiFastapi className="tech-icon"/>
                            <SiReact className="tech-icon"/>
                            <SiPython className="tech-icon"/>
                            <SiJavascript className="tech-icon" />
                            <SiPostgresql className="tech-icon" />
                            <SiGooglecloud className="tech-icon" />
                            <SiDocker className="tech-icon" />
                        </div>
                        <p className="project-description">I created this peer-to-peer marketplace application from scratch in a team of four cohort-mates at Hack Reactor. We began with the idea to build a platform housing informal classes for local people to share their knowledge, acquire new skills and foster community. This was my first experience taking a full stack application from seed to deployment. Over 6 weeks we wire-framed our vision for the application, built a development environment with docker, created our backend using Fast API and a SQL database, and created a dynamic user interface with React.js. This was a lesson in iterative development and agile methodology. Working in a team like this was a hands on lesson in Git workflow and general project organization. We used Linear to create and assign tickets and linked it up with Git Lab where we filled our merge requests. I am particularly proud of my work in implementing the Google Maps API and Redux toolkit into this project. The map centers on the authenticated user's address provided in their account information and accessed through the Redux store. Learning to work with global state and Google API were my highest priority learning goals in this project and I'm very happy with our product.</p>
                        <div className="project-detail-container">
                            <p className="project-detail">Deployed app: <Link className="project-link" to="https://luckythirteen.gitlab.io/plunge/" target="_blank" rel="noopener noreferrer">Plunge</Link> | Repo: <Link className="project-link" to="https://gitlab.com/luckythirteen/plunge" target="_blank" rel="noopener noreferrer">GitLab</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">React | FastAPI | Python | Javascript | SQL | GoogleMaps</p>
                        </div>
                    </div>
                </div>
                <div className="project-container right">
                <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">Developer Portfolio</h5>
                        <p className="shaded-text">September, 2023</p>
                    </div>
                        <div className="tech-icons-container">
                            <SiReact className="tech-icon" />
                            <SiJavascript className="tech-icon" />
                        </div>
                        <p className="project-description">This portfolio housing my projects is a project in itself. I built this from scratch using React and deployed it with github pages. I am not providing any screenshots for this one, anyone reading this is already looking at the live site. This is a work in progress, one I will refactor and expand going forward. I am still working on image hosting for this site and I apologize if screenshots are not appearing. I'm excited to share more repos and deployed applications as I build more. Anyone curious can view my code at the repo link below. </p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://github.com/SlySkillet/simons-developer-portfolio/" target="_blank" rel="noopener noreferrer">GitHub</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">React | Javascript </p>
                        </div>
                    </div>
                    <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">RadCar Automobiles</h5>
                        <p className="shaded-text">June, 2023</p>
                    </div>
                        <div className="screenshots-container">
                            <Button onClick={handleShowRadCar}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc8UHhcxGsxFHr_K4BAAP_TAK2h5WKRnr9gcOGBXaYAqfuioTRdO9uVpMvUi-5JElzaQXwuCL6npSREeFkLDKfy9XHfgqLKcOmtcfk9MLKvHXMjEdscpWf7vtqnkuPv9sBJpkQIPOHf_y2acg0yDzPRqjVrl_WFTPodPsimrNQfZLGR_NSHLSiVu2F1hfjVaAZA17i6repdiDbBZ8imL0UUpuR9j4hJZl3Ackn9S5z6ye88_6ethReZ3CkB_L5OjoY98-9kvCox-rwf0bKJ6vdTglhdZtMwRgEfaeDkaOKF0m6uKb4-gDU_0Bcf7_3SOjacZQpcflpHVC5R6qRaGkVNJu96UGUyREItJZJs3-hs74JRkhYIZOdS4i-RtBA38D8RzPX8d2CPvw9HR-B6cm-SdnloP023qR-EJJTb8vhhbEkw-MZzcrEUOu7-wN9emVQIwLnn5ZD4GbdcQ_NaezrsvRuMRoqOTyXv4U9iUbbGf7huYMlDo7WpCwJ_JsKsmnTyHpQZh6tM2sJHzGAJXc0bpx_NZh0CVDKqLcv6TR7KJbDtdF4x8DE8Uuwu_9D0NnzV2LCBwTimyNS5vYMQTliZMYAx81Gt8O7bulT2vGbLMyBMyHWF0udgGa12oDWZ8Wq0I8eWALmllVj1tM5uVKAQo3A7xywkYrLpL091zQk0rA7-I8YaNfHrqcCGWv8bzumgS32DykH5Ho66-xLQ6tKPcS1POP4aiJGsnvw2iRWbX9QdI3aYmi5i8sspsBclzVYiXQhfeaCBJva38cr4WloK-aQp2tT_yPQsgj8-E1DCCu-I77cshrhcBSReSIszjsmRkzD322sKKyFQ-tWuxgWAe9zrY7UyDn9wD4qR3mE1_Blel_eQnPQ53wWP_5gbzhWGIIxTCu9mN3cdrDK5Xow=w561-h314-no?authuser=0"} alt="main page" width="170"/>
                            </Button>
                            <Button onClick={handleShowRadCar}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc9Q8j-5FmaM5fCkH1WYHXf7TSPDBtGvwAu8eYkTgEya_B1ZbMvc0V3zMErKydEMgwhC9qBUQoNyno8twB5qP_DudRwWaxCsulrmErKiFfNfzx_BrQ_w9P1lr-k7xLqTrIFcuKf3VqH7K3saL0z6dtm6_xuHjmUEB1xRYXsQKpll1HXPq4TxlqNb3Er9-DchoUYlwcM9kfEgupj-BjB66j-k2sJs6wprLRzRtXRH9t3dYrh6ij-vC06zo895konFizR-MsVp8WeErd0zdHVwNaZsf7qC8GkZKJAPz_GdRso6-XXDv4msoShNHRc5C_8kukCYp83uGQAjqBWD1MFFcb7j16JR8YiOI36-sPiBTSziyoXGgsMW-Mr0mUVqRYEdSAxdFSRPSumWh4UX-rbkuBs5m8nbetuYa9BrlACPXKl0AAuD2nOwZiBsHHl2LalZZElH3rV4JId7azx0PYZqM3FglVFU_rCIKyzZzZa_dVbtDeKY1tF0ngn0yC2A7vtFBP6YqEvwwyrH9Pk39CXbsOlEPBqkadDnGiXSKvG9-niDRrotEU9E5fZLwg6RalNiKoEEtXf5OwAge6XycNwEA-3trIvYKN6OJD21s4NtSMUCZG5-C3MsyE_WWnGkH3O2t3uUeb_xlZrq3k7De9fYnG8tE9b-WiLEyviuLsBxThrdOHqHoE11qk-ANDohTgoBTYvD-Tn1Sv3cNRR0wZhczoxftTcA1JRxWj5QYFLxSSxjhnEk9DeaGJsMqrFcchouvPi155yVn8merOEdnHOPm7Q8Z1pruRz5L7Jo7Tgt2anSJy6pE5x4QLyvsrOlupItOr5-MDgU8J2YrUPVAlQ_cqKBj7kpEhA3jRM_15ngsiSBTB_5IiMpXyeQxz-7YsHHpuDtG4ASrUEVyPOwyfsMYQ=w1475-h814-s-no?authuser=0"} alt="location page" width="170"/>
                            </Button>
                        </div>
                        <Modal show={showRadCar} onHide={handleCloseRadCar} size="xl">
                                <Modal.Header closeButton>
                                <Modal.Title>RadCar Automobiles</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                <Carousel data-bs-theme="dark" indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100 radcar-modal-img"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc8UHhcxGsxFHr_K4BAAP_TAK2h5WKRnr9gcOGBXaYAqfuioTRdO9uVpMvUi-5JElzaQXwuCL6npSREeFkLDKfy9XHfgqLKcOmtcfk9MLKvHXMjEdscpWf7vtqnkuPv9sBJpkQIPOHf_y2acg0yDzPRqjVrl_WFTPodPsimrNQfZLGR_NSHLSiVu2F1hfjVaAZA17i6repdiDbBZ8imL0UUpuR9j4hJZl3Ackn9S5z6ye88_6ethReZ3CkB_L5OjoY98-9kvCox-rwf0bKJ6vdTglhdZtMwRgEfaeDkaOKF0m6uKb4-gDU_0Bcf7_3SOjacZQpcflpHVC5R6qRaGkVNJu96UGUyREItJZJs3-hs74JRkhYIZOdS4i-RtBA38D8RzPX8d2CPvw9HR-B6cm-SdnloP023qR-EJJTb8vhhbEkw-MZzcrEUOu7-wN9emVQIwLnn5ZD4GbdcQ_NaezrsvRuMRoqOTyXv4U9iUbbGf7huYMlDo7WpCwJ_JsKsmnTyHpQZh6tM2sJHzGAJXc0bpx_NZh0CVDKqLcv6TR7KJbDtdF4x8DE8Uuwu_9D0NnzV2LCBwTimyNS5vYMQTliZMYAx81Gt8O7bulT2vGbLMyBMyHWF0udgGa12oDWZ8Wq0I8eWALmllVj1tM5uVKAQo3A7xywkYrLpL091zQk0rA7-I8YaNfHrqcCGWv8bzumgS32DykH5Ho66-xLQ6tKPcS1POP4aiJGsnvw2iRWbX9QdI3aYmi5i8sspsBclzVYiXQhfeaCBJva38cr4WloK-aQp2tT_yPQsgj8-E1DCCu-I77cshrhcBSReSIszjsmRkzD322sKKyFQ-tWuxgWAe9zrY7UyDn9wD4qR3mE1_Blel_eQnPQ53wWP_5gbzhWGIIxTCu9mN3cdrDK5Xow=w561-h314-no?authuser=0"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc9Q8j-5FmaM5fCkH1WYHXf7TSPDBtGvwAu8eYkTgEya_B1ZbMvc0V3zMErKydEMgwhC9qBUQoNyno8twB5qP_DudRwWaxCsulrmErKiFfNfzx_BrQ_w9P1lr-k7xLqTrIFcuKf3VqH7K3saL0z6dtm6_xuHjmUEB1xRYXsQKpll1HXPq4TxlqNb3Er9-DchoUYlwcM9kfEgupj-BjB66j-k2sJs6wprLRzRtXRH9t3dYrh6ij-vC06zo895konFizR-MsVp8WeErd0zdHVwNaZsf7qC8GkZKJAPz_GdRso6-XXDv4msoShNHRc5C_8kukCYp83uGQAjqBWD1MFFcb7j16JR8YiOI36-sPiBTSziyoXGgsMW-Mr0mUVqRYEdSAxdFSRPSumWh4UX-rbkuBs5m8nbetuYa9BrlACPXKl0AAuD2nOwZiBsHHl2LalZZElH3rV4JId7azx0PYZqM3FglVFU_rCIKyzZzZa_dVbtDeKY1tF0ngn0yC2A7vtFBP6YqEvwwyrH9Pk39CXbsOlEPBqkadDnGiXSKvG9-niDRrotEU9E5fZLwg6RalNiKoEEtXf5OwAge6XycNwEA-3trIvYKN6OJD21s4NtSMUCZG5-C3MsyE_WWnGkH3O2t3uUeb_xlZrq3k7De9fYnG8tE9b-WiLEyviuLsBxThrdOHqHoE11qk-ANDohTgoBTYvD-Tn1Sv3cNRR0wZhczoxftTcA1JRxWj5QYFLxSSxjhnEk9DeaGJsMqrFcchouvPi155yVn8merOEdnHOPm7Q8Z1pruRz5L7Jo7Tgt2anSJy6pE5x4QLyvsrOlupItOr5-MDgU8J2YrUPVAlQ_cqKBj7kpEhA3jRM_15ngsiSBTB_5IiMpXyeQxz-7YsHHpuDtG4ASrUEVyPOwyfsMYQ=w1475-h814-s-no?authuser=0"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                        </Modal>
                        <div className="tech-icons-container">
                            <SiReact className="tech-icon" />
                            <TbBrandDjango className="tech-icon" />
                            <SiPython className="tech-icon" />
                            <SiJavascript className="tech-icon" />
                            <SiDocker className="tech-icon" />
                        </div>
                        <p className="project-description">This was a challenging project I took on in the second module of Hack Reactor. Many thanks to my partner Mac Stephens! Together we put together three microservices to handle an auto-dealership's inventory, services and sales. After completing a functional application, I did some experimenting with the user interface and gained some valuable experience incorporating bootstrap and custom css in React.</p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://gitlab.com/macstephens/project-beta/-/tree/layout-experiment" target="_blank" rel="noopener noreferrer">GitLab</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">Django | React | Python | Javascript | Docker</p>
                        </div>
                    </div>
                    <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">Task Manager</h5>
                        <p className="shaded-text">April, 2023</p>
                    </div>
                        <div className="screenshots-container">
                            <Button onClick={handleShowTaskManager}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc_PS73E8_n4X3mK8bUh1KRFfj6XaVJPHMHRlxWg6aj-KWQSEigETinHnCzmZtgDYyXTIaC2tY21S8UsKEopSNT1kYutjjmatoeEd8iB5uuA0MY87BNcZ9v6A6_Q9c35KK-FtN6dJYBG2TXsIZMBHEA5jxz5Yxt57nEVPwCkti9m1BzWMlvg1LxTMYzdr5lrVSdwx1nnMRvRG9ZpyqFuHD_aZb5mnQHH8pPMFRr3yOPkHl7GGTNqQst6PNZ_2IsBTBWfNtGrfSGhZ9CXItj28SbzdQuAuG6lnVJKavgzOi0I6FzD4TPEWfixIreZVpIYf3gZU4BOTPwAcK6n9l5xKcS-pkFeB5KiZrWacfjexcFSfGyOZ68w1d2KxcXHYoy6hso4mixRLkgYt1-k5s6Wv8H-zOzJiB26kTuSy0RFYdiJ7BCg2KjFFLUVGfu_ZpX_zw_OLw9_70JLINz5ZAEGom7felf3J4fQjB57EBhOMMNel-xvHJo2gaOTA0OtgteKi2-WK0xxeZoq72hGBNBSgDsEfdA8vVk3COPlUa41x-ns2A-13ROaS5RopPW6FSFfZqLTRGcgtBC1g7M7zlnmkwo0Z6KPNMsP8ik2SdWtnMsXizGmY7zDAj63ZLcVL3-rDXEMm8YkoRs1qMaGMaAURIY2MfDrpBBaq1OmxAOpQktUzyHEL3V09p_efCQKJudQLkVlumxtZN22Cixms35MVjHrsZRVV2o0DkXC9BOBdFwnT5q9NyH5knzt8FqBSnhWcshB50GpnA9cGoWoQ0k3CS-UBx55GyYPPTXZuyV-5spUwoVH9jkCQIs1Xel7iXJzcAkqo170FkN9HZPgn9Ze-iRdWxQ3KV_0jakRm1tQ3eiiwqUyneZtUd6E2PICgi8sa3mPwW3SBABwMz7xvVYVTg=w1418-h832-s-no?authuser=0"} alt="main page" width="170"/>
                            </Button>
                            <Button onClick={handleShowTaskManager}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc870Y6LE1f0YCmLmPif9JfWt00WycSP773Urh3YRb4RXXmP9q2kn3vKOBzL1K8GHEgkjlSYAqP2H6K1j19UpsDhMvKmqYAQilCCY5s8IbXPz5KCHQAGaqyMz5Q9cTD4juuU-V33usW7WA7o2b4BpRKt23A6SUGN7K0qc-aLxZKtxsI4yZGKIU4YzLx2uyeTRIXzLgjIJdgPSwCiBZdT75-1imhPBtD1GnwgY_IXjebKdI0MVXxo0UGndYkJO9yJ7rt0Ls3Xgh4RC3VR63N07OCJD25qkUiurmLYQVXB614qphiaMz1Yfk_3wxBK3c0DNzsHjys6C8s-wbLOjEy1C0SqXWIWMQRJbz16MCmoo1YXUsrM0MDa3KI8DeCn-31FHH60RIH3EMC_n_bfFY_gonfEQY8Guk8ZOBWsruxzUzPCF3t3DTUR8Cww0YD_SrbpHJho4uFmrRpa48hY80bL8LPF-hsqJZ63nEJsSeuVGF_bVUIxRbIs7H9jd80fGl1-n_oSZyW4X_PlZOtpwE4bVk2GlKmF5jvljV0s4u2yXOoqa4Gcl0r9hqbFWq5T4BhKXZC3aGe08ilC5n7Uf0_07HEtusbhG3brqQK0_jEHr5CrHmozKw6USCikncMcBbNBA3I9AnYC24Fsy7osrYhUnOWFf8GuzouqITzzdC-EK8nooM2M7JJSmgKddCtSd0HXCjVKV4etVT5xVDogBZ3V3znH9AFeqm8SfSuzGMyyTZ_emCVCUjv8CI3QnRvKlo82a85aD_bq7GpYIpObH9YGWB1qW_0krygnradO_jefeuqv-260O6vq6uxJHjbSXx85v0OKydV9-QDjVD5UgBRKaW7Wl9cdyf5vh32c1Y458jXJO-n9yj-8WqP5zBhHHio4thWb6drUlacoc4RQ_kT_oQ=w1437-h838-s-no?authuser=0"} alt="location page" width="170"/>
                            </Button>
                        </div>
                        <Modal show={showTaskManager} onHide={handleCloseTaskManager} size="xl">
                                <Modal.Header closeButton>
                                <Modal.Title>Task Manager</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                <Carousel data-bs-theme="dark" indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc_PS73E8_n4X3mK8bUh1KRFfj6XaVJPHMHRlxWg6aj-KWQSEigETinHnCzmZtgDYyXTIaC2tY21S8UsKEopSNT1kYutjjmatoeEd8iB5uuA0MY87BNcZ9v6A6_Q9c35KK-FtN6dJYBG2TXsIZMBHEA5jxz5Yxt57nEVPwCkti9m1BzWMlvg1LxTMYzdr5lrVSdwx1nnMRvRG9ZpyqFuHD_aZb5mnQHH8pPMFRr3yOPkHl7GGTNqQst6PNZ_2IsBTBWfNtGrfSGhZ9CXItj28SbzdQuAuG6lnVJKavgzOi0I6FzD4TPEWfixIreZVpIYf3gZU4BOTPwAcK6n9l5xKcS-pkFeB5KiZrWacfjexcFSfGyOZ68w1d2KxcXHYoy6hso4mixRLkgYt1-k5s6Wv8H-zOzJiB26kTuSy0RFYdiJ7BCg2KjFFLUVGfu_ZpX_zw_OLw9_70JLINz5ZAEGom7felf3J4fQjB57EBhOMMNel-xvHJo2gaOTA0OtgteKi2-WK0xxeZoq72hGBNBSgDsEfdA8vVk3COPlUa41x-ns2A-13ROaS5RopPW6FSFfZqLTRGcgtBC1g7M7zlnmkwo0Z6KPNMsP8ik2SdWtnMsXizGmY7zDAj63ZLcVL3-rDXEMm8YkoRs1qMaGMaAURIY2MfDrpBBaq1OmxAOpQktUzyHEL3V09p_efCQKJudQLkVlumxtZN22Cixms35MVjHrsZRVV2o0DkXC9BOBdFwnT5q9NyH5knzt8FqBSnhWcshB50GpnA9cGoWoQ0k3CS-UBx55GyYPPTXZuyV-5spUwoVH9jkCQIs1Xel7iXJzcAkqo170FkN9HZPgn9Ze-iRdWxQ3KV_0jakRm1tQ3eiiwqUyneZtUd6E2PICgi8sa3mPwW3SBABwMz7xvVYVTg=w1418-h832-s-no?authuser=0"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc870Y6LE1f0YCmLmPif9JfWt00WycSP773Urh3YRb4RXXmP9q2kn3vKOBzL1K8GHEgkjlSYAqP2H6K1j19UpsDhMvKmqYAQilCCY5s8IbXPz5KCHQAGaqyMz5Q9cTD4juuU-V33usW7WA7o2b4BpRKt23A6SUGN7K0qc-aLxZKtxsI4yZGKIU4YzLx2uyeTRIXzLgjIJdgPSwCiBZdT75-1imhPBtD1GnwgY_IXjebKdI0MVXxo0UGndYkJO9yJ7rt0Ls3Xgh4RC3VR63N07OCJD25qkUiurmLYQVXB614qphiaMz1Yfk_3wxBK3c0DNzsHjys6C8s-wbLOjEy1C0SqXWIWMQRJbz16MCmoo1YXUsrM0MDa3KI8DeCn-31FHH60RIH3EMC_n_bfFY_gonfEQY8Guk8ZOBWsruxzUzPCF3t3DTUR8Cww0YD_SrbpHJho4uFmrRpa48hY80bL8LPF-hsqJZ63nEJsSeuVGF_bVUIxRbIs7H9jd80fGl1-n_oSZyW4X_PlZOtpwE4bVk2GlKmF5jvljV0s4u2yXOoqa4Gcl0r9hqbFWq5T4BhKXZC3aGe08ilC5n7Uf0_07HEtusbhG3brqQK0_jEHr5CrHmozKw6USCikncMcBbNBA3I9AnYC24Fsy7osrYhUnOWFf8GuzouqITzzdC-EK8nooM2M7JJSmgKddCtSd0HXCjVKV4etVT5xVDogBZ3V3znH9AFeqm8SfSuzGMyyTZ_emCVCUjv8CI3QnRvKlo82a85aD_bq7GpYIpObH9YGWB1qW_0krygnradO_jefeuqv-260O6vq6uxJHjbSXx85v0OKydV9-QDjVD5UgBRKaW7Wl9cdyf5vh32c1Y458jXJO-n9yj-8WqP5zBhHHio4thWb6drUlacoc4RQ_kT_oQ=w1437-h838-s-no?authuser=0"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                        </Modal>
                        <div className="tech-icons-container">
                            <TbBrandDjango className="tech-icon" />
                            <SiPython className="tech-icon" />
                            <SiPlotly className="tech-icon" />
                        </div>
                        <p className="project-description">This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API.</p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://gitlab.com/SlySkillet/project-alpha-apr/-/tree/chart_experiment?ref_type=heads" target="_blank" rel="noopener noreferrer">GitLab</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">Django | Python | Plotly API</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="projects-container">
                <h2 className="project-title">Projects</h2>
                <div className="project-container center">
                <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">Developer Portfolio</h5>
                        <p className="shaded-text">September, 2023</p>
                    </div>
                        <div className="tech-icons-container">
                            <SiReact className="tech-icon" />
                            <SiJavascript className="tech-icon" />
                        </div>
                        <p className="project-description">This portfolio housing my projects is a project in itself. I built this from scratch using React and deployed it with github pages. I am not providing any screenshots for this one, anyone reading this is already looking at the live site. This is a work in progress, one I will refactor and expand going forward. I am still working on image hosting for this site and I apologize if screenshots are not appearing. I'm excited to share more repos and deployed applications as I build more. Anyone curious can view my code at the repo link below. </p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://github.com/SlySkillet/simons-developer-portfolio/" target="_blank" rel="noopener noreferrer">GitHub</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">React | Javascript </p>
                        </div>
                    </div>
                    <div className="project-content">
                        <div className="project-header">
                        <h5 className="project-description title">Plunge</h5>
                        <p className="shaded-text">August, 2023</p>
                        </div>
                        <div className="screenshots-container">
                            <Button onClick={handleShowPlunge}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc9IXcla3j_qkN3VMWsveeyFUoD7whfzX7AfNdZgkGtZK1lkDr65j2JrSW1Z6ivALR_dVIZqtahDm9dhJOICZX9zvA3rZmDsllfe7PQ_Ikk5kLDS8of7zgb0aY82tAAcSkyit0Jz38JazjdPlxrm8IMZLf7msQO-rLadzlYqjALbFyIjCbL2RotTXN_vsJlUGObSYIIA1oECbFBG0jvVI_NiKTCakfILOaoV1M6DheC4sKKNhabHqd9o_At53BfeAYbHIwQWp4dZO2tE0MbNcC31rOQfjJi3gYwez4oFHC5Zhg5H7d1eSaMrtlkc70BmwY1GTC4d99iOr3FjPps9HFXGuLXaqBI8ZVgv6Ak1RnvKNzMD3OuEg2QmMRa5JbF7GuA_4U_Kk_HMrFZExRgHMT6xEKbSyqNxvWUcSrE9IRSHQZG6V2b405j9yPoYEVxrCwzbuZAcWSqTYheRTpdCNOJOJv6IcnTPjALTwgPXbK5zmd5zGObTTm9xOz48PlRUlUShfckH8MA14Jf8hulIpUCTeIkZicb2gNMfJXnKD2sYdoSDFOPTQz1R7nONMrmPwkdVJND5oog7M6P0JS3rPLck_T6mS4-rhDHR5BNO12nQm3sLskr8sCSXA3sxWQuVIqeCZe98EGvkbmkhmDPRnluvo6TN1aJGgliaEwQGKZyVzJ0lJO0Fr8qpqJFzZJe-f3Rxv-YuB94zNcmRI3wWbQO0O9vP1edUbaZ4xi_HGfINtcB8I6sdiUsPGM0a5L2PUZ2dAUuKyzGCFj8m_qdDCPs5AhNvFQz0zzlzqHh1iU4sZg1lsLQ0dVwtqmjJp6eG0cwf-pN58nZ2G7_UdODX669kYW8jhLMFLmtXC0EEQDWn-5KhsQqdl0LBiIUYhfI45uc5R8cTiM7anrDzyjiQqA=w867-h938-s-no?authuser=0"} alt="main page" width="170"/>
                            </Button>
                            <Button onClick={handleShowPlunge}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc-LuQT8nmZYtZabhxqp3MPbn7jvWkuw-blw6VmSOu62tlsuZB0vU7IgDILPgJMz0-11G5pVpzMjbWfKIHQ8VBqFScKoQsOfnIFDfjDWvdgnSYG5b4MWWzxA515EYWXaHd3PpQ-o0GdgQG2u624bT5inJKeqzFcuxWtoMI83DWSXIKj5uwWe_NXxe2CUs_DvujXV9rmqhzzGcsNpgxinCkIx5eoriz2Featdplvqt_pA1WDvHMRFUWrhSV4IwGJrl1mJTxBiOeHxn9WXvLJQYt86LjTr6Bb6Cgp5OzSeRyPOxoKh_IHBe7cSRcAEnRgb8L2m9RknPRXF66cUJzdl9AGx80Cv_Rkk5H4b2qn1Q4YRQZTuxK6qem-SnFFMyUHUK4fcXBpa4szfEjwwmhgf9vs5uP01yMjnp5f2L6ziO0aoaq-Meq5lf8EK692zALWqWaV0dcHvDRlLd3mkmTb_g_us7BS0BzL0xDNogaCK9Ji4uDXVgV4HpawidH-4qzNGCYD_9cs_LeDzAhMaQ23pBuIQ5p_KLyUZtm4BV5NKdnt-5ipgIO3pLUfer9XiWkxiolBxciPdvnCq9uIOjYlOjikp57M9PTqycg9k4xqiAeGzV1ttlu4iCbsLtFRnSMN-rGYDNqoqAuNQMyPOj0IZ2DBD8djklWsmuuJtoVryjF2cBSiKY2K49NbGAGzCirmOZaU6n9Azljg9uPYrKCQdmZ8SXe58A5iKkn4r4PN9ua71siF2mcagdc0PhVMjSo4BTD6rwOi09J-i1K6tzvOEA_GOGs4e480IUwfFwvMhOeUL3Dc8RZ22EOhZq_y1qOCQ1NyT_3HKI0FsMOWo4NIhRqRSQ3_sS9UUVapUsLoyz6aViWmJlHbL8eTwWxTKltGkhQ37-fBgg3HUm_qIdsp-7g=w865-h938-s-no?authuser=0"} alt="location page" width="170"/>
                            </Button>
                            <Button onClick={handleShowPlunge}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc9BLelU3-iAhcsp0G-PJ_IEL3qvhpCq02qxYfWyFw8LdR56EVjJSlxFeQqVclZCet-MoJBhneqf3pjLsHrbXFuy28v4RBX9aDvVrvXdkonxQmaQ8Ed-Xsq-fn3-zZb5SuN9zLIgeVWp0afIbyF6l0iO478o4eguxKUyvqitEHPO1jG1Swh0fOezWqH20ScILVf66WyvH4aImzV5hvTReZssAm_YWJyj_gS_CmgrW6RueHHsOv01BUOJvi7jEax_xqzzyzH9Ae_WIm75qZ1GupOLeLltenMW0DOVLaM-FXyYfqW_yF5S8KMUHkVX3qiVLoEykjIS0S7-dalmmxqQTH04Ezc0OtKP7Bw83ZBZvzgvQRgSAbGpiZs0flGHHvh7O5D99iqaXhWpFrt0s0VlxI19kiEqDB9mIxxk8TfvUGi_CWl1WUhOAl2bYTLqlWUmTqkUpZlHiZ9codUx__2NDib--DSFxh_F-yI4RsoXvrn3f9-bcBQqK8LJ7YIyhciZdhrVMm_d9ycFUNTwjTJUeRkV0vUbpYUIpAvx-5iXbGVvugl9hjFy5vSNA6iA1y6oEM-ypvggCvgjzxu2-yyWimCpj0Gw127odrYGXfQuZeZxnOkaLa9SETaKazNiQDlGvABasGoI0LEDB3osfELK7cBkLKmuxPzSlakAsQ6WOSz14ULEHx1XqWjt7tFmPMDCvZeCmfJ9J1xdnYDkjjrhLxqLUvkK6PacjtwV-WWRse2MiEEztzg9Uhs5NvBIEOedK6JL2lKzvBdHCSNmIBIGFa_-hvv3YE8uarobjvmDQ7qEq4WwieJpsHlqVAFdJ0f3RkzSwY187UIE9I12CsmmTX7MOJf_8vKMqRC4vVTMyZBmm5QX9Zqej4MIul6QYMnqRhsCys3gPoK_4CMW5vZQXw=w282-h306-no?authuser=0"} alt="categories page" width="170"/>
                            </Button>
                        </div>
                        <Modal show={showPlunge} onHide={handleClosePlunge} size="xl">
                                <Modal.Header closeButton>
                                <Modal.Title>Plunge</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Carousel data-bs-theme="dark" indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc9IXcla3j_qkN3VMWsveeyFUoD7whfzX7AfNdZgkGtZK1lkDr65j2JrSW1Z6ivALR_dVIZqtahDm9dhJOICZX9zvA3rZmDsllfe7PQ_Ikk5kLDS8of7zgb0aY82tAAcSkyit0Jz38JazjdPlxrm8IMZLf7msQO-rLadzlYqjALbFyIjCbL2RotTXN_vsJlUGObSYIIA1oECbFBG0jvVI_NiKTCakfILOaoV1M6DheC4sKKNhabHqd9o_At53BfeAYbHIwQWp4dZO2tE0MbNcC31rOQfjJi3gYwez4oFHC5Zhg5H7d1eSaMrtlkc70BmwY1GTC4d99iOr3FjPps9HFXGuLXaqBI8ZVgv6Ak1RnvKNzMD3OuEg2QmMRa5JbF7GuA_4U_Kk_HMrFZExRgHMT6xEKbSyqNxvWUcSrE9IRSHQZG6V2b405j9yPoYEVxrCwzbuZAcWSqTYheRTpdCNOJOJv6IcnTPjALTwgPXbK5zmd5zGObTTm9xOz48PlRUlUShfckH8MA14Jf8hulIpUCTeIkZicb2gNMfJXnKD2sYdoSDFOPTQz1R7nONMrmPwkdVJND5oog7M6P0JS3rPLck_T6mS4-rhDHR5BNO12nQm3sLskr8sCSXA3sxWQuVIqeCZe98EGvkbmkhmDPRnluvo6TN1aJGgliaEwQGKZyVzJ0lJO0Fr8qpqJFzZJe-f3Rxv-YuB94zNcmRI3wWbQO0O9vP1edUbaZ4xi_HGfINtcB8I6sdiUsPGM0a5L2PUZ2dAUuKyzGCFj8m_qdDCPs5AhNvFQz0zzlzqHh1iU4sZg1lsLQ0dVwtqmjJp6eG0cwf-pN58nZ2G7_UdODX669kYW8jhLMFLmtXC0EEQDWn-5KhsQqdl0LBiIUYhfI45uc5R8cTiM7anrDzyjiQqA=w867-h938-s-no?authuser=0"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc-LuQT8nmZYtZabhxqp3MPbn7jvWkuw-blw6VmSOu62tlsuZB0vU7IgDILPgJMz0-11G5pVpzMjbWfKIHQ8VBqFScKoQsOfnIFDfjDWvdgnSYG5b4MWWzxA515EYWXaHd3PpQ-o0GdgQG2u624bT5inJKeqzFcuxWtoMI83DWSXIKj5uwWe_NXxe2CUs_DvujXV9rmqhzzGcsNpgxinCkIx5eoriz2Featdplvqt_pA1WDvHMRFUWrhSV4IwGJrl1mJTxBiOeHxn9WXvLJQYt86LjTr6Bb6Cgp5OzSeRyPOxoKh_IHBe7cSRcAEnRgb8L2m9RknPRXF66cUJzdl9AGx80Cv_Rkk5H4b2qn1Q4YRQZTuxK6qem-SnFFMyUHUK4fcXBpa4szfEjwwmhgf9vs5uP01yMjnp5f2L6ziO0aoaq-Meq5lf8EK692zALWqWaV0dcHvDRlLd3mkmTb_g_us7BS0BzL0xDNogaCK9Ji4uDXVgV4HpawidH-4qzNGCYD_9cs_LeDzAhMaQ23pBuIQ5p_KLyUZtm4BV5NKdnt-5ipgIO3pLUfer9XiWkxiolBxciPdvnCq9uIOjYlOjikp57M9PTqycg9k4xqiAeGzV1ttlu4iCbsLtFRnSMN-rGYDNqoqAuNQMyPOj0IZ2DBD8djklWsmuuJtoVryjF2cBSiKY2K49NbGAGzCirmOZaU6n9Azljg9uPYrKCQdmZ8SXe58A5iKkn4r4PN9ua71siF2mcagdc0PhVMjSo4BTD6rwOi09J-i1K6tzvOEA_GOGs4e480IUwfFwvMhOeUL3Dc8RZ22EOhZq_y1qOCQ1NyT_3HKI0FsMOWo4NIhRqRSQ3_sS9UUVapUsLoyz6aViWmJlHbL8eTwWxTKltGkhQ37-fBgg3HUm_qIdsp-7g=w865-h938-s-no?authuser=0"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc9BLelU3-iAhcsp0G-PJ_IEL3qvhpCq02qxYfWyFw8LdR56EVjJSlxFeQqVclZCet-MoJBhneqf3pjLsHrbXFuy28v4RBX9aDvVrvXdkonxQmaQ8Ed-Xsq-fn3-zZb5SuN9zLIgeVWp0afIbyF6l0iO478o4eguxKUyvqitEHPO1jG1Swh0fOezWqH20ScILVf66WyvH4aImzV5hvTReZssAm_YWJyj_gS_CmgrW6RueHHsOv01BUOJvi7jEax_xqzzyzH9Ae_WIm75qZ1GupOLeLltenMW0DOVLaM-FXyYfqW_yF5S8KMUHkVX3qiVLoEykjIS0S7-dalmmxqQTH04Ezc0OtKP7Bw83ZBZvzgvQRgSAbGpiZs0flGHHvh7O5D99iqaXhWpFrt0s0VlxI19kiEqDB9mIxxk8TfvUGi_CWl1WUhOAl2bYTLqlWUmTqkUpZlHiZ9codUx__2NDib--DSFxh_F-yI4RsoXvrn3f9-bcBQqK8LJ7YIyhciZdhrVMm_d9ycFUNTwjTJUeRkV0vUbpYUIpAvx-5iXbGVvugl9hjFy5vSNA6iA1y6oEM-ypvggCvgjzxu2-yyWimCpj0Gw127odrYGXfQuZeZxnOkaLa9SETaKazNiQDlGvABasGoI0LEDB3osfELK7cBkLKmuxPzSlakAsQ6WOSz14ULEHx1XqWjt7tFmPMDCvZeCmfJ9J1xdnYDkjjrhLxqLUvkK6PacjtwV-WWRse2MiEEztzg9Uhs5NvBIEOedK6JL2lKzvBdHCSNmIBIGFa_-hvv3YE8uarobjvmDQ7qEq4WwieJpsHlqVAFdJ0f3RkzSwY187UIE9I12CsmmTX7MOJf_8vKMqRC4vVTMyZBmm5QX9Zqej4MIul6QYMnqRhsCys3gPoK_4CMW5vZQXw=w282-h306-no?authuser=0"
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                        </Modal>
                        <div className="tech-icons-container">
                            <SiFastapi className="tech-icon"/>
                            <SiReact className="tech-icon"/>
                            <SiPython className="tech-icon"/>
                            <SiJavascript className="tech-icon" />
                            <SiPostgresql className="tech-icon" />
                            <SiGooglecloud className="tech-icon" />
                            <SiDocker className="tech-icon" />
                        </div>
                        <p className="project-description">I created this peer-to-peer marketplace application from scratch in a team of four cohort-mates at Hack Reactor. We began with the idea to build a platform housing informal classes for local people to share their knowledge, acquire new skills and foster community. This was my first experience taking a full stack application from seed to deployment. Over 6 weeks we wire-framed our vision for the application, built a development environment with docker, created our backend using Fast API and a SQL database, and created a dynamic user interface with React.js. This was a lesson in iterative development and agile methodology. Working in a team like this was a hands on lesson in Git workflow and general project organization. We used Linear to create and assign tickets and linked it up with Git Lab where we filled our merge requests. I am particularly proud of my work in implementing the Google Maps API and Redux toolkit into this project. The map centers on the authenticated user's address provided in their account information and accessed through the Redux store. Learning to work with global state and Google API were my highest priority learning goals in this project and I'm very happy with our product.</p>
                        <div className="project-detail-container">
                            <p className="project-detail">Deployed app: <Link className="project-link" to="https://luckythirteen.gitlab.io/plunge/" target="_blank" rel="noopener noreferrer">Plunge</Link> | Repo: <Link className="project-link" to="https://gitlab.com/luckythirteen/plunge" target="_blank" rel="noopener noreferrer">GitLab</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">React | FastAPI | Python | Javascript | SQL | GoogleMaps</p>
                        </div>
                    </div>
                    <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">RadCar Automobiles</h5>
                        <p className="shaded-text">June, 2023</p>
                    </div>
                        <div className="screenshots-container">
                            <Button onClick={handleShowRadCar}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc8UHhcxGsxFHr_K4BAAP_TAK2h5WKRnr9gcOGBXaYAqfuioTRdO9uVpMvUi-5JElzaQXwuCL6npSREeFkLDKfy9XHfgqLKcOmtcfk9MLKvHXMjEdscpWf7vtqnkuPv9sBJpkQIPOHf_y2acg0yDzPRqjVrl_WFTPodPsimrNQfZLGR_NSHLSiVu2F1hfjVaAZA17i6repdiDbBZ8imL0UUpuR9j4hJZl3Ackn9S5z6ye88_6ethReZ3CkB_L5OjoY98-9kvCox-rwf0bKJ6vdTglhdZtMwRgEfaeDkaOKF0m6uKb4-gDU_0Bcf7_3SOjacZQpcflpHVC5R6qRaGkVNJu96UGUyREItJZJs3-hs74JRkhYIZOdS4i-RtBA38D8RzPX8d2CPvw9HR-B6cm-SdnloP023qR-EJJTb8vhhbEkw-MZzcrEUOu7-wN9emVQIwLnn5ZD4GbdcQ_NaezrsvRuMRoqOTyXv4U9iUbbGf7huYMlDo7WpCwJ_JsKsmnTyHpQZh6tM2sJHzGAJXc0bpx_NZh0CVDKqLcv6TR7KJbDtdF4x8DE8Uuwu_9D0NnzV2LCBwTimyNS5vYMQTliZMYAx81Gt8O7bulT2vGbLMyBMyHWF0udgGa12oDWZ8Wq0I8eWALmllVj1tM5uVKAQo3A7xywkYrLpL091zQk0rA7-I8YaNfHrqcCGWv8bzumgS32DykH5Ho66-xLQ6tKPcS1POP4aiJGsnvw2iRWbX9QdI3aYmi5i8sspsBclzVYiXQhfeaCBJva38cr4WloK-aQp2tT_yPQsgj8-E1DCCu-I77cshrhcBSReSIszjsmRkzD322sKKyFQ-tWuxgWAe9zrY7UyDn9wD4qR3mE1_Blel_eQnPQ53wWP_5gbzhWGIIxTCu9mN3cdrDK5Xow=w561-h314-no?authuser=0"} alt="main page" width="170"/>
                            </Button>
                            <Button onClick={handleShowRadCar}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc9Q8j-5FmaM5fCkH1WYHXf7TSPDBtGvwAu8eYkTgEya_B1ZbMvc0V3zMErKydEMgwhC9qBUQoNyno8twB5qP_DudRwWaxCsulrmErKiFfNfzx_BrQ_w9P1lr-k7xLqTrIFcuKf3VqH7K3saL0z6dtm6_xuHjmUEB1xRYXsQKpll1HXPq4TxlqNb3Er9-DchoUYlwcM9kfEgupj-BjB66j-k2sJs6wprLRzRtXRH9t3dYrh6ij-vC06zo895konFizR-MsVp8WeErd0zdHVwNaZsf7qC8GkZKJAPz_GdRso6-XXDv4msoShNHRc5C_8kukCYp83uGQAjqBWD1MFFcb7j16JR8YiOI36-sPiBTSziyoXGgsMW-Mr0mUVqRYEdSAxdFSRPSumWh4UX-rbkuBs5m8nbetuYa9BrlACPXKl0AAuD2nOwZiBsHHl2LalZZElH3rV4JId7azx0PYZqM3FglVFU_rCIKyzZzZa_dVbtDeKY1tF0ngn0yC2A7vtFBP6YqEvwwyrH9Pk39CXbsOlEPBqkadDnGiXSKvG9-niDRrotEU9E5fZLwg6RalNiKoEEtXf5OwAge6XycNwEA-3trIvYKN6OJD21s4NtSMUCZG5-C3MsyE_WWnGkH3O2t3uUeb_xlZrq3k7De9fYnG8tE9b-WiLEyviuLsBxThrdOHqHoE11qk-ANDohTgoBTYvD-Tn1Sv3cNRR0wZhczoxftTcA1JRxWj5QYFLxSSxjhnEk9DeaGJsMqrFcchouvPi155yVn8merOEdnHOPm7Q8Z1pruRz5L7Jo7Tgt2anSJy6pE5x4QLyvsrOlupItOr5-MDgU8J2YrUPVAlQ_cqKBj7kpEhA3jRM_15ngsiSBTB_5IiMpXyeQxz-7YsHHpuDtG4ASrUEVyPOwyfsMYQ=w1475-h814-s-no?authuser=0"} alt="location page" width="170"/>
                            </Button>
                        </div>
                        <Modal show={showRadCar} onHide={handleCloseRadCar} size="xl">
                                <Modal.Header closeButton>
                                <Modal.Title>RadCar Automobiles</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                <Carousel data-bs-theme="dark" indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100 radcar-modal-img"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc8UHhcxGsxFHr_K4BAAP_TAK2h5WKRnr9gcOGBXaYAqfuioTRdO9uVpMvUi-5JElzaQXwuCL6npSREeFkLDKfy9XHfgqLKcOmtcfk9MLKvHXMjEdscpWf7vtqnkuPv9sBJpkQIPOHf_y2acg0yDzPRqjVrl_WFTPodPsimrNQfZLGR_NSHLSiVu2F1hfjVaAZA17i6repdiDbBZ8imL0UUpuR9j4hJZl3Ackn9S5z6ye88_6ethReZ3CkB_L5OjoY98-9kvCox-rwf0bKJ6vdTglhdZtMwRgEfaeDkaOKF0m6uKb4-gDU_0Bcf7_3SOjacZQpcflpHVC5R6qRaGkVNJu96UGUyREItJZJs3-hs74JRkhYIZOdS4i-RtBA38D8RzPX8d2CPvw9HR-B6cm-SdnloP023qR-EJJTb8vhhbEkw-MZzcrEUOu7-wN9emVQIwLnn5ZD4GbdcQ_NaezrsvRuMRoqOTyXv4U9iUbbGf7huYMlDo7WpCwJ_JsKsmnTyHpQZh6tM2sJHzGAJXc0bpx_NZh0CVDKqLcv6TR7KJbDtdF4x8DE8Uuwu_9D0NnzV2LCBwTimyNS5vYMQTliZMYAx81Gt8O7bulT2vGbLMyBMyHWF0udgGa12oDWZ8Wq0I8eWALmllVj1tM5uVKAQo3A7xywkYrLpL091zQk0rA7-I8YaNfHrqcCGWv8bzumgS32DykH5Ho66-xLQ6tKPcS1POP4aiJGsnvw2iRWbX9QdI3aYmi5i8sspsBclzVYiXQhfeaCBJva38cr4WloK-aQp2tT_yPQsgj8-E1DCCu-I77cshrhcBSReSIszjsmRkzD322sKKyFQ-tWuxgWAe9zrY7UyDn9wD4qR3mE1_Blel_eQnPQ53wWP_5gbzhWGIIxTCu9mN3cdrDK5Xow=w561-h314-no?authuser=0"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc9Q8j-5FmaM5fCkH1WYHXf7TSPDBtGvwAu8eYkTgEya_B1ZbMvc0V3zMErKydEMgwhC9qBUQoNyno8twB5qP_DudRwWaxCsulrmErKiFfNfzx_BrQ_w9P1lr-k7xLqTrIFcuKf3VqH7K3saL0z6dtm6_xuHjmUEB1xRYXsQKpll1HXPq4TxlqNb3Er9-DchoUYlwcM9kfEgupj-BjB66j-k2sJs6wprLRzRtXRH9t3dYrh6ij-vC06zo895konFizR-MsVp8WeErd0zdHVwNaZsf7qC8GkZKJAPz_GdRso6-XXDv4msoShNHRc5C_8kukCYp83uGQAjqBWD1MFFcb7j16JR8YiOI36-sPiBTSziyoXGgsMW-Mr0mUVqRYEdSAxdFSRPSumWh4UX-rbkuBs5m8nbetuYa9BrlACPXKl0AAuD2nOwZiBsHHl2LalZZElH3rV4JId7azx0PYZqM3FglVFU_rCIKyzZzZa_dVbtDeKY1tF0ngn0yC2A7vtFBP6YqEvwwyrH9Pk39CXbsOlEPBqkadDnGiXSKvG9-niDRrotEU9E5fZLwg6RalNiKoEEtXf5OwAge6XycNwEA-3trIvYKN6OJD21s4NtSMUCZG5-C3MsyE_WWnGkH3O2t3uUeb_xlZrq3k7De9fYnG8tE9b-WiLEyviuLsBxThrdOHqHoE11qk-ANDohTgoBTYvD-Tn1Sv3cNRR0wZhczoxftTcA1JRxWj5QYFLxSSxjhnEk9DeaGJsMqrFcchouvPi155yVn8merOEdnHOPm7Q8Z1pruRz5L7Jo7Tgt2anSJy6pE5x4QLyvsrOlupItOr5-MDgU8J2YrUPVAlQ_cqKBj7kpEhA3jRM_15ngsiSBTB_5IiMpXyeQxz-7YsHHpuDtG4ASrUEVyPOwyfsMYQ=w1475-h814-s-no?authuser=0"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                        </Modal>
                        <div className="tech-icons-container">
                            <SiReact className="tech-icon" />
                            <TbBrandDjango className="tech-icon" />
                            <SiPython className="tech-icon" />
                            <SiJavascript className="tech-icon" />
                            <SiDocker className="tech-icon" />
                        </div>
                        <p className="project-description">This was a challenging project I took on in the second module of Hack Reactor. Many thanks to my partner Mac Stephens! Together we put together three microservices to handle an auto-dealership's inventory, services and sales. After completing a functional application, I did some experimenting with the user interface and gained some valuable experience incorporating bootstrap and custom css in React.</p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://gitlab.com/macstephens/project-beta/-/tree/layout-experiment" target="_blank" rel="noopener noreferrer">GitLab</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">Django | React | Python | Javascript | Docker</p>
                        </div>
                    </div>
                    <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">Task Manager</h5>
                        <p className="shaded-text">April, 2023</p>
                    </div>
                        <div className="screenshots-container">
                            <Button onClick={handleShowTaskManager}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc_PS73E8_n4X3mK8bUh1KRFfj6XaVJPHMHRlxWg6aj-KWQSEigETinHnCzmZtgDYyXTIaC2tY21S8UsKEopSNT1kYutjjmatoeEd8iB5uuA0MY87BNcZ9v6A6_Q9c35KK-FtN6dJYBG2TXsIZMBHEA5jxz5Yxt57nEVPwCkti9m1BzWMlvg1LxTMYzdr5lrVSdwx1nnMRvRG9ZpyqFuHD_aZb5mnQHH8pPMFRr3yOPkHl7GGTNqQst6PNZ_2IsBTBWfNtGrfSGhZ9CXItj28SbzdQuAuG6lnVJKavgzOi0I6FzD4TPEWfixIreZVpIYf3gZU4BOTPwAcK6n9l5xKcS-pkFeB5KiZrWacfjexcFSfGyOZ68w1d2KxcXHYoy6hso4mixRLkgYt1-k5s6Wv8H-zOzJiB26kTuSy0RFYdiJ7BCg2KjFFLUVGfu_ZpX_zw_OLw9_70JLINz5ZAEGom7felf3J4fQjB57EBhOMMNel-xvHJo2gaOTA0OtgteKi2-WK0xxeZoq72hGBNBSgDsEfdA8vVk3COPlUa41x-ns2A-13ROaS5RopPW6FSFfZqLTRGcgtBC1g7M7zlnmkwo0Z6KPNMsP8ik2SdWtnMsXizGmY7zDAj63ZLcVL3-rDXEMm8YkoRs1qMaGMaAURIY2MfDrpBBaq1OmxAOpQktUzyHEL3V09p_efCQKJudQLkVlumxtZN22Cixms35MVjHrsZRVV2o0DkXC9BOBdFwnT5q9NyH5knzt8FqBSnhWcshB50GpnA9cGoWoQ0k3CS-UBx55GyYPPTXZuyV-5spUwoVH9jkCQIs1Xel7iXJzcAkqo170FkN9HZPgn9Ze-iRdWxQ3KV_0jakRm1tQ3eiiwqUyneZtUd6E2PICgi8sa3mPwW3SBABwMz7xvVYVTg=w1418-h832-s-no?authuser=0"} alt="main page" width="170"/>
                            </Button>
                            <Button onClick={handleShowTaskManager}>
                                <img className="screenshot" src={"https://lh3.googleusercontent.com/pw/AIL4fc870Y6LE1f0YCmLmPif9JfWt00WycSP773Urh3YRb4RXXmP9q2kn3vKOBzL1K8GHEgkjlSYAqP2H6K1j19UpsDhMvKmqYAQilCCY5s8IbXPz5KCHQAGaqyMz5Q9cTD4juuU-V33usW7WA7o2b4BpRKt23A6SUGN7K0qc-aLxZKtxsI4yZGKIU4YzLx2uyeTRIXzLgjIJdgPSwCiBZdT75-1imhPBtD1GnwgY_IXjebKdI0MVXxo0UGndYkJO9yJ7rt0Ls3Xgh4RC3VR63N07OCJD25qkUiurmLYQVXB614qphiaMz1Yfk_3wxBK3c0DNzsHjys6C8s-wbLOjEy1C0SqXWIWMQRJbz16MCmoo1YXUsrM0MDa3KI8DeCn-31FHH60RIH3EMC_n_bfFY_gonfEQY8Guk8ZOBWsruxzUzPCF3t3DTUR8Cww0YD_SrbpHJho4uFmrRpa48hY80bL8LPF-hsqJZ63nEJsSeuVGF_bVUIxRbIs7H9jd80fGl1-n_oSZyW4X_PlZOtpwE4bVk2GlKmF5jvljV0s4u2yXOoqa4Gcl0r9hqbFWq5T4BhKXZC3aGe08ilC5n7Uf0_07HEtusbhG3brqQK0_jEHr5CrHmozKw6USCikncMcBbNBA3I9AnYC24Fsy7osrYhUnOWFf8GuzouqITzzdC-EK8nooM2M7JJSmgKddCtSd0HXCjVKV4etVT5xVDogBZ3V3znH9AFeqm8SfSuzGMyyTZ_emCVCUjv8CI3QnRvKlo82a85aD_bq7GpYIpObH9YGWB1qW_0krygnradO_jefeuqv-260O6vq6uxJHjbSXx85v0OKydV9-QDjVD5UgBRKaW7Wl9cdyf5vh32c1Y458jXJO-n9yj-8WqP5zBhHHio4thWb6drUlacoc4RQ_kT_oQ=w1437-h838-s-no?authuser=0"} alt="location page" width="170"/>
                            </Button>
                        </div>
                        <Modal show={showTaskManager} onHide={handleCloseTaskManager} size="xl">
                                <Modal.Header closeButton>
                                <Modal.Title>Task Manager</Modal.Title>
                                </Modal.Header>
                                <Modal.Body >
                                <Carousel data-bs-theme="dark" indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc_PS73E8_n4X3mK8bUh1KRFfj6XaVJPHMHRlxWg6aj-KWQSEigETinHnCzmZtgDYyXTIaC2tY21S8UsKEopSNT1kYutjjmatoeEd8iB5uuA0MY87BNcZ9v6A6_Q9c35KK-FtN6dJYBG2TXsIZMBHEA5jxz5Yxt57nEVPwCkti9m1BzWMlvg1LxTMYzdr5lrVSdwx1nnMRvRG9ZpyqFuHD_aZb5mnQHH8pPMFRr3yOPkHl7GGTNqQst6PNZ_2IsBTBWfNtGrfSGhZ9CXItj28SbzdQuAuG6lnVJKavgzOi0I6FzD4TPEWfixIreZVpIYf3gZU4BOTPwAcK6n9l5xKcS-pkFeB5KiZrWacfjexcFSfGyOZ68w1d2KxcXHYoy6hso4mixRLkgYt1-k5s6Wv8H-zOzJiB26kTuSy0RFYdiJ7BCg2KjFFLUVGfu_ZpX_zw_OLw9_70JLINz5ZAEGom7felf3J4fQjB57EBhOMMNel-xvHJo2gaOTA0OtgteKi2-WK0xxeZoq72hGBNBSgDsEfdA8vVk3COPlUa41x-ns2A-13ROaS5RopPW6FSFfZqLTRGcgtBC1g7M7zlnmkwo0Z6KPNMsP8ik2SdWtnMsXizGmY7zDAj63ZLcVL3-rDXEMm8YkoRs1qMaGMaAURIY2MfDrpBBaq1OmxAOpQktUzyHEL3V09p_efCQKJudQLkVlumxtZN22Cixms35MVjHrsZRVV2o0DkXC9BOBdFwnT5q9NyH5knzt8FqBSnhWcshB50GpnA9cGoWoQ0k3CS-UBx55GyYPPTXZuyV-5spUwoVH9jkCQIs1Xel7iXJzcAkqo170FkN9HZPgn9Ze-iRdWxQ3KV_0jakRm1tQ3eiiwqUyneZtUd6E2PICgi8sa3mPwW3SBABwMz7xvVYVTg=w1418-h832-s-no?authuser=0"
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://lh3.googleusercontent.com/pw/AIL4fc870Y6LE1f0YCmLmPif9JfWt00WycSP773Urh3YRb4RXXmP9q2kn3vKOBzL1K8GHEgkjlSYAqP2H6K1j19UpsDhMvKmqYAQilCCY5s8IbXPz5KCHQAGaqyMz5Q9cTD4juuU-V33usW7WA7o2b4BpRKt23A6SUGN7K0qc-aLxZKtxsI4yZGKIU4YzLx2uyeTRIXzLgjIJdgPSwCiBZdT75-1imhPBtD1GnwgY_IXjebKdI0MVXxo0UGndYkJO9yJ7rt0Ls3Xgh4RC3VR63N07OCJD25qkUiurmLYQVXB614qphiaMz1Yfk_3wxBK3c0DNzsHjys6C8s-wbLOjEy1C0SqXWIWMQRJbz16MCmoo1YXUsrM0MDa3KI8DeCn-31FHH60RIH3EMC_n_bfFY_gonfEQY8Guk8ZOBWsruxzUzPCF3t3DTUR8Cww0YD_SrbpHJho4uFmrRpa48hY80bL8LPF-hsqJZ63nEJsSeuVGF_bVUIxRbIs7H9jd80fGl1-n_oSZyW4X_PlZOtpwE4bVk2GlKmF5jvljV0s4u2yXOoqa4Gcl0r9hqbFWq5T4BhKXZC3aGe08ilC5n7Uf0_07HEtusbhG3brqQK0_jEHr5CrHmozKw6USCikncMcBbNBA3I9AnYC24Fsy7osrYhUnOWFf8GuzouqITzzdC-EK8nooM2M7JJSmgKddCtSd0HXCjVKV4etVT5xVDogBZ3V3znH9AFeqm8SfSuzGMyyTZ_emCVCUjv8CI3QnRvKlo82a85aD_bq7GpYIpObH9YGWB1qW_0krygnradO_jefeuqv-260O6vq6uxJHjbSXx85v0OKydV9-QDjVD5UgBRKaW7Wl9cdyf5vh32c1Y458jXJO-n9yj-8WqP5zBhHHio4thWb6drUlacoc4RQ_kT_oQ=w1437-h838-s-no?authuser=0"
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                        </Modal>
                        <div className="tech-icons-container">
                            <TbBrandDjango className="tech-icon" />
                            <SiPython className="tech-icon" />
                            <SiPlotly className="tech-icon" />
                        </div>
                        <p className="project-description">This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API.</p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://gitlab.com/SlySkillet/project-alpha-apr/-/tree/chart_experiment?ref_type=heads" target="_blank" rel="noopener noreferrer">GitLab</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">Django | Python | Plotly API</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Projects
