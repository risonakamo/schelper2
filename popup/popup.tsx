class PopupMain extends React.Component
{
  render()
  {
    return <div>
      hey
    </div>;
  }
}

function main()
{
  ReactDOM.render(<PopupMain/>,document.querySelector(".main"));
}

window.onload=main;