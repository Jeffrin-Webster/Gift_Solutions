import styled from "styled-components";



export const BillTable = styled.div`
margin-top: 20x;
overflow-y: auto;
overflow-x: auto;

@media screen and (max-width:320px) {
  font-size: 10px;

  
}


& button {
  font-weight: 400;
  border-color: black;
  font-size:1rem;
  border-radius: 25px;
  padding: 20px 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  float: left;
  margin-right:20px;
  top: 5px;
  &:hover {
      background-color: #0980bc !important;
  }


  .productminusbtn{
    border-color: black;
  }
}
  & table thead tr th {
      font-size:12px !important;
      padding: 10px;
  background-color: rgb(242, 241, 235);
  border: none;

  };

  & table tbody tr td { 
      font-size:25px !important;
      padding:7px
    
      
}


  table {
  width: 100%;
  border-collapse: collapse;
  /* padding: 2px; */
  margin-bottom:20px !important;
  /* border:1px solid black; */

  };

  & table thead th {
  border-bottom: 1px solid black;
  border: 2px solid #656565;
  font-size: 32px;
  };

  td {
  text-align: center;
  border: 2px solid #e3dede;
  
  };
`;

export const profileData = [
  { name: 'example', description: 'example description' },
];

export const ProfileHead = styled.div`
  margin: 110px 60px 0px 60px;



  & button {
  font-weight: 400;
  font-size:1rem;
  border-radius: 25px;
  padding: 20px 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  float: left;
  margin-right:20px;
  top: 5px;
  &:hover {
      background-color: #0980bc !important;
  }
}

  @media screen and (max-width:320px) {
    padding: 0px;
    margin: 110px 0px 0px 0px;


    
  }

  @media screen and (min-width:321px) and (max-width:768px) {
    padding: 0px;
    margin: 110px 0px 0px 0px;

    
  }

`


