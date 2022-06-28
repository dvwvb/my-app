import logo from './logo.svg';
import './Common.css';
import './App.css';

// JSX에서 class는 사용하지 않고 className을 사용한다
// tabindex는 tabIndex로 사용한다.
// function()은 ()=> 로 대체 가능

function FooterMenu(props) {
  return (
    <div className="f_menu">
      <ul className="f_menulist">
        <li className="f_menuitem">
          <a href="/" onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }} className="f_menuanchor">브랜드</a>
        </li>
        <li className="f_menuitem">
          <a href="/product/kitchen" className="f_menuanchor">제품</a>
        </li>
        <li className="f_menuitem">
          <a href="/interiorSolution/interiorStart" className="f_menuanchor">인테리어 솔루션</a>
        </li>
        <li className="f_menuitem">
          <a href="/magazine" className="f_menuanchor">매거진.Y</a>
        </li>
        <li className="f_menuitem">
          <a href="/showroom" className="f_menuanchor">쇼룸 안내</a>
        </li>
      </ul>
      <ul className="f_menulist">
        <li className="f_menuitem">
          <a href="/recruitAgency" className="f_menuanchor">대리점 개설문의</a>
        </li>
        <li className="f_menuitem">
          <a href="/customer" className="f_menuanchor">고객센터</a>
        </li>
        <li className="f_menuitem">
          <a href="#" className="f_menuanchor">A/S 접수</a>
        </li>
        <li className="f_menuitem">
          <a href="/" className="f_menuanchor" data-role="modal__open" data-target="#TermsofUse">이용약관</a>
        </li>
        <li className="f_menuitem">
          <a href="/" className="f_menuanchor" data-role="modal__open" data-target="#Privacypolicy">개인정보 처리방침</a>
        </li>
        <li className="f_menuitem">
          <a href="http://company.yl.co.kr/ko/" className="f_menuanchor" target="_blank" title="새창 열림">회사소개</a>
        </li>
      </ul>
      <ul className="f_menulist f_menulist--link">
        <li className="f_menuitem">
          <a href="https://blog.naver.com/younglim1984" className="f_menuanchor" target="_blank" title="새창 열림">Blog</a>
        </li>
        <li className="f_menuitem">
          <a href="https://www.instagram.com/younglim_official/" className="f_menuanchor" target="_blank" title="새창 열림">Instagram</a>
        </li>
        <li className="f_menuitem">
          <a href="https://www.youtube.com/c/%EC%98%81%EB%A6%Bcyounglim" className="f_menuanchor" target="_blank" title="새창 열림">YouTube</a>
        </li>
        <li className="f_menuitem">
          <a href="https://younglimmall.co.kr" className="f_menuanchor" target="_blank" title="새창 열림">영림몰</a>
        </li>
        <li className="f_menuitem">
          <a href="/catalog" className="f_menuanchor" target="_blank" title="새창 열림">e카탈로그</a>
        </li>
      </ul>
    </div>
  )
}

function FooterCorp() {
  return (
    <div className="f_corporaterow">
      <div className="f_corporate">
        <div className="f_corporatename">영림임업(주)</div>
        <div className="f_corporateinfo">인천광역시 남동구 호구포로 9</div>
        <div className="f_corporateinfo">
          <div className="f_corporateinfoitem">대표. 김장원</div>
          <div className="f_corporateinfoitem">
            사업자 등록번호. 137-81-02411
          </div>
        </div>
        <div className="f_corporateinfo">
          <div className="f_corporateinfoitem f_corporateinfoitem--block">
            Tel. 1577-5600
          </div>
          <div className="f_corporateinfoitem f_corporateinfoitem--block">
            Fax. 032-813-5505
          </div>
        </div>
      </div>
      <div className="f_corporate">
        <div className="f_corporatename">영림화학(주)</div>
        <div className="f_corporateinfo">
          인천광역시 서구 북항로 31번길 13
        </div>
        <div className="f_corporateinfo">
          <div className="f_corporateinfoitem">대표. 황복현</div>
          <div className="f_corporateinfoitem">
            사업자 등록번호. 137-81-40827
          </div>
        </div>
        <div className="f_corporateinfo">
          <div className="f_corporateinfoitem f_corporateinfoitem--block">
            Tel. 1577-5600
          </div>
          <div className="f_corporateinfoitem f_corporateinfoitem--block">
            Fax. 032-578-4455
          </div>
        </div>
      </div>
      <div className="f_corporate">
        <div className="f_corporatename">영림산업(주)</div>
        <div className="f_corporateinfo">
          인천광역시 남동구 앵고개로 584
        </div>
        <div className="f_corporateinfo">
          <div className="f_corporateinfoitem">대표. 황복현</div>
          <div className="f_corporateinfoitem">
            사업자 등록번호. 131-86-10859
          </div>
        </div>
        <div className="f_corporateinfo">
          <div className="f_corporateinfoitem f_corporateinfoitem--block">
            Tel. 1577-5600
          </div>
          <div className="f_corporateinfoitem f_corporateinfoitem--block">
            Fax. 032-812-5501
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <footer className="footer" id="footer">
      <div className="f_body">
        <div className="f_inner">
          <div className="f_row">
            <div className="f_logo">영림 토탈 인테리어</div>
            <FooterMenu onChangeMode={function () {  //function()은 ()=> 로 대체 가능
              alert('Header')
            }} />
          </div>
          <FooterCorp />
        </div>
      </div>
      <div className="f_bottom">
        <div className="f_inner">
          <div className="f_copy">Younglim</div>
          <div className="f_cs">
            고객센터<span className="f_csnumber">1577 - 5600</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;