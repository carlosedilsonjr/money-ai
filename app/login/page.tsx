import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "../_components/ui/button";

async function LoginPage() {
	const { userId } = await auth();

	if (userId) {
		redirect("/");
	}

	return (
		<div className="grid h-full grid-cols-2">
			<div className="mx-auto flex h-full max-w-lg flex-col justify-center p-8">
				<Image
					src="/logo.svg"
					alt="Money AI"
					width={163}
					height={39}
					className="mb-8"
				/>
				<h1 className="mb-3 font-bold text-4xl">Bem-Vindo</h1>
				<p className="mb-8 text-muted-foreground">
					A Money AI é uma platforma de gestão financeira que utiliza IA para
					monitorar suas movimentações, oferecer inisghts personalisados e
					ajudando a tomar decisões financeiras mais inteligentes.
				</p>
				<SignInButton>
					<Button variant={"outline"}>
						<LogInIcon className="mr-2" />
						Fazer Login
					</Button>
				</SignInButton>
			</div>

			<div className="relative h-full w-full">
				<Image
					src="/login.svg"
					alt="Faça login"
					fill
					className="object-cover"
				/>
			</div>
		</div>
	);
}

export default LoginPage;
