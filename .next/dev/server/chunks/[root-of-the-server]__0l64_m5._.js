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
"[project]/pages/api/auth.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/supabaseClient.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__ = __turbopack_context__.i("[externals]/bcryptjs [external] (bcryptjs, cjs, [project]/node_modules/bcryptjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function handler(req, res) {
    if (req.method === 'POST') {
        const { action, username, password, answers } = req.body;
        if (action === 'register') {
            const { data: existingUser, error: existingError } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id').eq('username', username).maybeSingle();
            if (existingUser) {
                return res.status(400).json({
                    error: 'Username already exists'
                });
            }
            const saltRounds = 10;
            const hashedPassword = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["default"].hash(password, saltRounds);
            const { data: newUser, error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('users').insert([
                {
                    username: username,
                    password_hash: hashedPassword,
                    security_q1: answers.q1,
                    security_q2: answers.q2,
                    security_q3: answers.q3
                }
            ]).select('id, username').single();
            if (dbError) {
                return res.status(500).json({
                    error: dbError.message
                });
            }
            res.status(201).json({
                message: 'User registered successfully',
                user: newUser
            });
        } else if (action === 'login') {
            const { data: user, error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, username, password_hash').eq('username', username).single();
            if (dbError || !user) {
                return res.status(400).json({
                    error: 'Invalid credentials'
                });
            }
            const isValid = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["default"].compare(password, user.password_hash);
            if (!isValid) {
                return res.status(400).json({
                    error: 'Invalid credentials'
                });
            }
            res.status(200).json({
                message: 'Login successful',
                user: {
                    id: user.id,
                    username: user.username
                }
            });
        } else if (action === 'forgot-password') {
            const { username, answers, newPassword } = req.body;
            const { data: user, error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, security_q1, security_q2, security_q3').eq('username', username).single();
            if (dbError || !user) {
                return res.status(400).json({
                    error: 'User not found'
                });
            }
            if (user.security_q1 !== answers.q1 || user.security_q2 !== answers.q2 || user.security_q3 !== answers.q3) {
                return res.status(400).json({
                    error: 'Security answers do not match'
                });
            }
            const saltRounds = 10;
            const hashedNewPassword = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcryptjs$29$__["default"].hash(newPassword, saltRounds);
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$supabaseClient$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
                password_hash: hashedNewPassword
            }).eq('id', user.id);
            if (updateError) {
                return res.status(500).json({
                    error: updateError.message
                });
            }
            res.status(200).json({
                message: 'Password updated successfully'
            });
        } else {
            res.status(400).json({
                error: 'Invalid action'
            });
        }
    } else {
        res.setHeader('Allow', [
            'POST'
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0l64_m5._.js.map