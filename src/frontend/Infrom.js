import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Inform = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserRole(parsedUser.role);
    }
  }, []);

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
        <button onClick={handleLogout}>LOGOUT</button>
      </nav>
      <div className="scrollable-section">
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
        </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

        <p>Today i will speek about whom i follow
          Talking about my genration most of other follw the instragram influencer like e,</p>

        <p>But i follow the greatest player of indian cricket team sorry greatest player of world in criket virat kohli,
          gretest test captain of our nation he is fully powerdhouse when he play for india.</p>
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
        <p>Talking about from when i know him first time i show him in worldcup 2011,his debut in 2008
          in worldcup 2011 when sir virender shewag and sir sachin tendulkar was out by malinga everybody thinking about we loose this final
          but when the god of cricket was the out the future king of world coming like villen who come to smash srilankan bowler
          at the score of 33/2 he come to bat and save his wicket and mad partnership above 50 with gambhir,in this gretest final he make 31 runs
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
        <p>after the winning of 2011 world cup virat kohli change the all diet of his for presenting india long time
          in 2014 the toughest tour for virat kohli in englsand but after that indian cricket team back him
          and they give me another chance to him in australia in austrilia we lost our captain MSD after the
          3rd test MSD suddenly annouse his retirement in test cricket after that MSD Choose virat to carry forward to our team in test
        </p>

        <p>after becoming test captain and 4 years after 2014 virat kohli goes england again and smash the all bowler like he smash childs
          make highest runs in single series make by captian in england
          in 2018 Viratkohli had 103 avg in Sa against SA this is impossibe for asian player
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
  );
};

export default Inform;
