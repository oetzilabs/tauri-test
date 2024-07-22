import { Route, Router } from '@solidjs/router'
import { Loader2 } from 'lucide-solid'
import { ErrorBoundary, lazy, Suspense, type Component } from 'solid-js'
import Header from './components/Header'
import { Button } from './components/ui/button'

const Home = lazy(() => import('./pages/Home'))
const Status = lazy(() => import('./pages/Status'))

const App: Component = () => {
  return (
    <ErrorBoundary
      fallback={(error, reset) => (
        <div class="flex flex-col gap-2">
          <pre>{JSON.stringify(error)}</pre>
          <Button onClick={() => reset()}>Reset</Button>
        </div>
      )}
    >
      <Router
        root={({ children }) => (
          <>
            <Suspense
              fallback={
                <div class="items-center justify-center w-full h-full">
                  <Loader2 class="size-16" />
                </div>
              }
            >
              <Header />
              <div class="p-2 bg-background h-[calc(100vh-4rem)] w-full">{children}</div>
            </Suspense>
          </>
        )}
      >
        <Route path="/" component={Home} />
        <Route path="/status" component={Status} />
      </Router>
    </ErrorBoundary>
  )
}

export default App
