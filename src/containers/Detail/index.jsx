import React from 'react';
import { AppContext } from './../App/index';
import DetailPage from '../../implementations/Detail/DetailPage';
import { getAllProducts, getOneProduct } from '../../service/ProductService';
import { ChromeContext } from './../../implementations/Navigation/Chrome/index';
import RoundIcon from './../../components/RoundIcon/index';
import GoBackButton from './../../components/GoBackButton/index';
import { withRouter } from 'react-router-dom';

const DetailView = withRouter((props) => <DetailViewComponent {...props} />);

class DetailViewComponent extends React.Component {
  constructor(props) {
    super(props);

    const contextPost = props.posts.find((post) => post.sys.id === this.props.match.params.id);

    this.state = {
      loading: true,
      posts: [],
      carousel: [],
    };
  }

  async componentDidMount() {
    const { onChangeValues, configTopBar } = this.props;

    configTopBar({
      renderLeft: () => <GoBackButton />,
      renderRight: null,
      showLogo: true,
    });

    Promise.all([
      await getAllProducts(),
      await getOneProduct(this.props.match.params.id),
    ]).then((values) => this.setValues(values, onChangeValues));

    this.setState({ loading: false });
  }

  setValues = (values, onChangeValues) => {
    const value = {
      posts: values[0].items,
      post: values[1].items[0].fields,
    };

    onChangeValues({ posts: values[0].items });

    this.setState(value);
  }

  render() {
    const { contextPosts } = this.props;
    const { posts } = this.state;

    return (
      <DetailPage data={posts || contextPosts} />
    );
  }
}

const Detail = () => (
  <ChromeContext.Consumer>
    {({ configTopBar }) => (
      <AppContext.Consumer>
        {({ posts, carousel, onChangeValues }) => (
          <DetailView
            posts={posts}
            carousel={carousel}
            onChangeValues={onChangeValues}
            configTopBar={configTopBar}
          />
        )}
      </AppContext.Consumer>
    )}
  </ChromeContext.Consumer>
);

export default Detail;
