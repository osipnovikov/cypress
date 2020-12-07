import { debug as debugFn } from 'debug'
import { start as createDevServer } from './startServer'
const debug = debugFn('@cypress/webpack-dev-server:webpack')

export async function startDevServer (config, webpackConfig) {
  const webpackDevServer = await createDevServer(webpackConfig, config)

  return new Promise((resolve) => {
    const httpSvr = webpackDevServer.listen(0, '127.0.0.1', () => {
      const port = httpSvr.address().port

      debug('Component testing webpack server started on port', port)
      resolve(port)
    })
  })
}
