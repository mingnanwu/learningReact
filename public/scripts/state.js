var ClickApp = React.createClass({
        render: function(){
            return (
                <div>
                    <ButtonGroup>
                        <DropdownButton bsStyle="success" title="Dropdown">
                            <MenuItem key="1">Dropdown link</MenuItem>
                            <MenuItem key="2">Dropdown link</MenuItem>
                        </DropdownButton>
                        <Button bsStyle="info">Middle</Button>
                        <Button bsStyle="info">Right</Button>
                    </ButtonGroup>
                </div>
)
}
});

var clickComponent = React.render(
        <ClickApp/>,
    document.getElementById('app')
)