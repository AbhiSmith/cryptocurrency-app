import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="mx-20">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-5">
        Globle Crypto State
      </h1>
      <div className="grid  grid-cols-1  gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 w-full pt-7">
        <div className="max-w-sm">
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>To Exchange</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>Total Market Cap</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>Total 24h Volume</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>Total Cryptocurrencies</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
