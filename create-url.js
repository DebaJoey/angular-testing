function buildUrl(params, host= 'decodedfrontend.io'){
    if(Array.isArray(params))
    return `${host}/${params.join('/')}`;

    if(typeof params === "string")
    return `${host}/${params}`;

    throw new Error('Unexpected Params.....');
}

it(`should properly build URL from string`, () => {
    const result = buildUrl('test');
    expect(result).toBe('decodedfrontend.io/test');
});

it(`should properly build URL from array of strings`, () => {
    const result = buildUrl(['test','1']);
    expect(result).toBe('decodedfrontend.io/test/1');
});
