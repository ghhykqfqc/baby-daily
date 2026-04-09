module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/supabaseClient.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import, [project]/node_modules/@supabase/supabase-js)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://bdoggapwjiwdozricyzg.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_1PsjEKvYLNHtByoDiRmjCg_OXTkvAhs");
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__["createClient"])(supabaseUrl, supabaseKey);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/api/diapers.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/supabaseClient.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function handler(req, res) {
    const { babyId } = req.query;
    if (!babyId) {
        return res.status(400).json({
            error: 'Missing babyId'
        });
    }
    if (req.method === 'GET') {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('diapers').select('*').eq('baby_id', babyId).order('timestamp', {
            ascending: false
        });
        if (error) {
            return res.status(500).json({
                error: error.message
            });
        }
        res.status(200).json(data);
    } else if (req.method === 'POST') {
        const { type, sub, time, timestamp, color } = req.body;
        if (!type || !sub || !time) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('diapers').insert([
            {
                baby_id: babyId,
                type,
                sub,
                time,
                timestamp: timestamp || Date.now(),
                color: type === 'pee' ? null : color
            }
        ]).select().single();
        if (error) {
            return res.status(500).json({
                error: error.message
            });
        }
        res.status(201).json(data);
    } else if (req.method === 'PUT') {
        const { id, type, sub, time, timestamp, color } = req.body;
        if (!id) {
            return res.status(400).json({
                error: 'Missing id'
            });
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('diapers').update({
            type,
            sub,
            time,
            timestamp,
            color
        }).eq('id', id).select().single();
        if (error) {
            return res.status(500).json({
                error: error.message
            });
        }
        res.status(200).json(data);
    } else if (req.method === 'DELETE') {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({
                error: 'Missing id'
            });
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('diapers').delete().eq('id', id);
        if (error) {
            return res.status(500).json({
                error: error.message
            });
        }
        res.status(204).end();
    } else {
        res.setHeader('Allow', [
            'GET',
            'POST',
            'PUT',
            'DELETE'
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ll680b._.js.map