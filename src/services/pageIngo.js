export const getPageInfo = (location) => {
  switch (location.toLowerCase()) {
    case '/home':
      return {
        header: 'Home',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        body: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquid, suscipit, rerum quos facilis
        repellat architecto commodi officia atque nemo facere eum non illo
        voluptatem quae delectus odit vel itaque amet.`
      };
    case '/shop':
      return {
        header: 'Shop',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        body: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquid, suscipit, rerum quos facilis
        repellat architecto commodi officia atque nemo facere eum non illo
        voluptatem quae delectus odit vel itaque amet.`
      };
    case '/products':
      return {
        header: 'Products',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        body: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquid, suscipit, rerum quos facilis
        repellat architecto commodi officia atque nemo facere eum non illo
        voluptatem quae delectus odit vel itaque amet.`
      };
    case '/product':
      return {
        header: 'Product',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        body: `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aliquid, suscipit, rerum quos facilis
        repellat architecto commodi officia atque nemo facere eum non illo
        voluptatem quae delectus odit vel itaque amet.`
      };
    case '/login':
      return {
        header: 'Login',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        body: ''
      };
    default:
      return {
        header: location,
        title: '',
        body: ''
      };
  }
};
