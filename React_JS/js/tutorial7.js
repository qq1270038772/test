//tutorial7.js
var Comment = React.createClass(
	{   
		rawMarkup:function(){
			var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
			return {_html:rawMarkup};
		},
		render:function(){
			return (
				<div className="comment">
				<h2 className="commentAuthor">
				{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
				</div>
				);
		}
	}
);