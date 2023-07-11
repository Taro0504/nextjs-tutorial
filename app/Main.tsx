import { Container } from "./common/components";

function Main({ children }: { children: React.ReactNode}) {
    return (
        <Container
            as="main"
            maxW="container.lg"
            my={{ base: 4 }}
            minH="calc(100vh - 115px - 2rem)"
            >
            {children}
        </Container>
    );
}

export default Main;