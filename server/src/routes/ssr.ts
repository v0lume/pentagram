import SsrController from '../controllers/ssr';

export default router => {
    router.all('*', SsrController.index);
};