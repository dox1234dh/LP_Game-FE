interface savePlayLog {
    score: Number,
    stage: Number,
    status: Number
}

interface listQuestion {
    id: Number
}

export async function apiSavePlayLog({ score, stage, status }: savePlayLog) {
    const token = useCookie('token');
    const { data, pending }: any = await useFetch(urlApi().urlSavePlayLog, {
        method: 'post',
        headers: <any>{ 'Content-Type': 'application/json', 'x-access-token': token.value, },
        body: {
            "score": score,
            "stage": stage,
            "status": status
        },
    });

    if (data.value) {
        return true;
    }
    return false;
}

export async function apiListQuestion({ id }: listQuestion) {
    const token = useCookie('token');
    const { data, pending }: any = await useFetch(urlApi().urlListQuestion + `/${id}`, {
        method: 'get',
        headers: <any>{ 'x-access-token': token.value, },
    });

    if (data.value) {
        return data?.value;
    }
    return null;
}