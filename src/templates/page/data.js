const PageTemplateFragment = `fragment PageTemplateFragment on WPGraphQL_Page {
	title
	excerpt
	fields {
		hero {
			title
			description
			illustration
			link {
				url
				title
				target
			}
		}
		layouts {
			... on WPGraphQL_Page_Fields_Layouts_MultiColumns {
				title
				background
				columns {
					title
					content
				}
				name
			}
			... on WPGraphQL_Page_Fields_Layouts_Tweets {
				name
			}
			... on WPGraphQL_Page_Fields_Layouts_List {
				name
				title
				background
				lists {
					title
					content
					link {
						target
						title
						url
					}
				}
				illustration
			}
			... on WPGraphQL_Page_Fields_Layouts_Text {
				name
				title
				content
				background
			}
			... on WPGraphQL_Page_Fields_Layouts_TextImage {
				name
				title
				content
				background
				illustration
				link {
					target
					title
					url
				}
			}
		}
	}
}`;

module.exports.PageTemplateFragment = PageTemplateFragment;
