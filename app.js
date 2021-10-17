const mdb = require('mongodb');
const { MongoClient } = mdb;

// const url = 'mongodb://192.168.199.170:27017'; // 数据库连接的地址
const url = 'mongodb://test:123456@192.168.199.170:27017/test'; // 连接到开启了权限验证的数据库，前面的test:123456表示账号:密码，最后的test表示库名。

const client = new MongoClient(url); // 实例化MongoClient 传入数据库连接地址
const dbName = 'test'; // 操作的数据库名称

async function main() {
    // 连接数据库
    await client.connect();
    console.log('数据库连接成功');

    // 切换到要操作的数据库
    const db = client.db(dbName);

    // 创建表
    // await db.createCollection('user', (err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //         client.close();
    //     }
    // });

    // 删除表
    // await db.dropCollection('user', (err, res) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         client.close();
    //         console.log(res);
    //     }
    // });
    // 或者
    // db.collection('user').drop((err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //     }
    //     client.close();
    // });

    // 插入单条数据
    // db.collection('user').insertOne({ name: 'zhangsan', age: 20 }, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //         client.close();
    //     }
    // });

    // 插入多条数据
    // const arr = [
    //     { name: 'lisi', age: 23 },
    //     { name: 'wangwu', age: 18 },
    // ];
    // db.collection('user').insertMany(arr, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //         client.close();
    //     }
    // });

    // 更新单条数据
    // db.collection('user').updateOne({ name: 'zhangsan' }, { $set: { age: 18 } }, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //         client.close();
    //     }
    // });

    // 更新多条数据
    // const str = { age: 18 };
    // const updateStr = { $set: { age: 20 } };
    // db.collection('user').updateMany(str, updateStr, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //         client.close();
    //     }
    // });

    // 查询表的数据
    // db.collection('user')
    //     .find({})
    //     .toArray((err, res) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         } else {
    //             console.log(res);
    //             client.close();
    //         }
    //     });

    // 查询带条件的数据
    // db.collection('user')
    //     .find({ age: 20 })
    //     .toArray((err, res) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         } else {
    //             console.log(res);
    //             client.close();
    //         }
    //     });

    // 查询排序数据
    // db.collection('user')
    //     .find()
    //     .sort({ age: 1 })
    //     .toArray((err, res) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         } else {
    //             console.log(res);
    //             client.close();
    //         }
    //     });

    // 删除单条数据
    // db.collection('user').deleteOne({ name: 'wangwu' }, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //     }
    // });

    // 删除多条数据
    // db.collection('user').deleteMany({ age: 23 }, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log(res);
    //     }
    // });
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        // client.close();
    }); // 操作完数据库之后一定要关闭数据库
