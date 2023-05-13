import Link from "next/link";

const ReposPage = async () => {
    let getRepos = await fetch('https://api.github.com/users/mazanlabeeb/repos');
    let repos = await getRepos.json();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return (
        <>
            <h1 className="text-2xl my-4">Public Github Repos</h1>
            <div className="flex gap-4 flex-col items-center justify-center">
                {
                    repos.map((item: any) => {
                        return <div key={item.id} className="rounded border-black border p-2 w-96 flex flex-col gap-3">
                            <Link className='hover:underline text-blue-600' href={`/code/repos/${item.name}`}>
                                <h3 className="text-center"> {item.name}</h3>
                            </Link>

                            {
                                item.description && <p> <strong>Description:</strong>{item.description}</p>
                            }
                            <div className="flex items-center justify-between">
                                <p><strong>⭐</strong> {item.stargazers_count}</p>
                                <p><strong>🕶</strong> {item.watchers}</p>
                                <p><strong>🔗</strong> <a className="text-blue-600" href={item.html_url} target="_blank">Github</a></p>
                            </div>
                        </div>;
                    })
                }
            </div>
        </>
    )
}

export default ReposPage;