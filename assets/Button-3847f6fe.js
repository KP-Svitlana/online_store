import{n,c as e,p as o,t,d as r,j as s}from"./index-535d35b7.js";const c=n.button`
  width: 100%;
  border: none;
  background-color: ${e.primary_main};
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  color: ${o.Gray_0};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color ${t.transitionDuration} ${t.cubicBezie};

  @media ${r.tablet} {
    max-width: 300px;
  }
  
  :hover,
  :focus {
    background-color: ${e.secondary_dark};
  }
`,p=n.button`
  width: 100%;
  border: 1px solid ${o.text};
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  color: ${o.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 1px;
  cursor: pointer;
  transition: border ${t.transitionDuration} ${t.cubicBezie};

  @media ${r.tablet} {
    padding: 14px 56px;
  }

  :hover,
  :focus {
    border: 1px solid ${e.secondary_dark};
  }
`,l=({text:i,handleLoadMore:a})=>s.jsx(c,{onClick:a,type:"submit",children:i});export{p as B,l as a};
