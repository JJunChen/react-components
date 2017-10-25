class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		};
	}

	onListItemHover() {
		this.setState({
			hover: true
		});
	};
	onListItemExistHover() {
		this.setState({
			hover: false
		});
	};
	render() {
		var style = {'fontWeight': this.state.hover ? 'bold' : 'normal'};
		return (
			<li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemExistHover.bind(this)}>{this.props.item}</li>
		);
	}
};

var CreateGroceryList = (props) => (
	<ul>
		{props.items.map(item => 
			<GroceryListItem item = {item} />
		)}
	</ul>
);

var GroceryList = () => (
	<div>
		<CreateGroceryList items = {['cucumbers', 'kale']}/>
	</div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));