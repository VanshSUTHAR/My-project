import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
const Home = () => {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserRole(parsedUser.role);
        }
    }, [])

    const handleLogout = () => {
        if (window.confirm('are you sure You want to logout?')) {
            localStorage.removeItem('user');
            navigate('/login')
        }
    }

    return (
    <div>          
        <nav>

        <Link to="/Home">home</Link>
        <Link to="/Infrom">information</Link>

        {userRole === 'admin' && <Link to="/Listing">list</Link>}

        {!userRole && (
            <>
                <Link to="/Login">login</Link>
                <Link to="/Register">register</Link>
            </>
        )}
        <button onClick={handleLogout}>LOGOUTx`</button>
    </nav>
        <div className="scrollable-section">
      
            <p>
                Welcome to area of introduction about INDIAN CRICKET TEAM                Rightnow there are 3 different captain of india in 3 formats
                in ODI - Rohit , in T20 - Surya & in TEST - Shubhman.;
                in ODI -Vice captain is Shubhman,in T20 Vice captain is Shubhman 
                & in TEST Rishabh</p>
            <p> But in 2018 where virat is captain BCCI not allowed him to remove from captainship of all 3 formats
                but after losing semifinal against newzealand kohli only want to lead india in test formats
                but due to BCCI's selector Sourav Ganguly's desicion of need only one captain in all formats
                Because of that he remove kohli form leadership and make Rohit Sharma captain
                But right now Because Mr.Aajit Agarkar india had 3 differntcaptians in 3 formats ,
                Because of the reason they remove rohit from test captainship and make pressure on him to leave test
                so he deside take retirement from the test.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>

            <p>After that kohli also retired from the test cricket</p>
            <p>Because of dirty politics india's top bestman virat and rohit retire from test cricket
                after that now we have get some rummors that bcci like to remove rohit from ODI captainship and make
                Shreyas Iyer to new Captain .</p>
            <p>
                this is information a bout the indian team at information page i wrote about role model
                i am influance by Viratkohli sir so i write something for virat kohli
            </p>

            <p>
                there was golden days of our indian cricket team when kohli and rohit are played all 3 formats
                but right now both played only single format just ODI's due to dirty politics of BCCI
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae sapien nec justo tincidunt fermentum.
                Curabitur euismod nunc vel nisi facilisis, ut cursus leo luctus.
                Sed rhoncus magna at sapien gravida, in lacinia erat porta.
                Phasellus tempus turpis nec velit convallis, a tincidunt nulla blandit.
                Maecenas sit amet purus in odio pretium dignissim.
                Aliquam erat volutpat. Integer vel justo nec sapien bibendum sodales.
                Donec euismod, nisl a mattis gravida, justo sapien tincidunt nulla.
                Suspendisse potenti. Morbi non felis nec sapien convallis vehicula.
                Etiam imperdiet lorem ut sapien tincidunt, sed luctus magna iaculis.
            </p>

        </div>
        <footer>

            <h3>Thank you for visiting!</h3>

        </footer>

    </div>
    )
}
export default Home;    