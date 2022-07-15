// //数组题一，给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度，nums 已按升序排列
// let a1 = function(nums) {
//     // 判断这个数组是否为空
//     if(nums == '' || nums.length == 0)return
//     // 定一个变量
//     var left = 0
//     for(let i = 1; i < nums.length; i++) {
//         // 索引1-1=0，如果等于索引1，那么变量left+1，进入第二次循环，索引2-1=1，不等于索引2，那么把这个数组的右边的值赋值给左边，索引1等于索引2的值
//         if(nums[i - 1 ] == nums[i]) {
//             ++left
//         }else {
//             nums[i-left] = nums[i]
//         }
//     }
//     // 最后循环出来，left是从0开始，那么只要left+1代表加一个重复项，减去这些重复项就得出答案
//     return nums.length - left
// }
// let b1 = [0,0,1,1,1,2,2,3,3,4]
// console.log('数组题一，答案：',a1(b1));

// //数组题二，贪心算法，第一天买股票，第二条卖股票，最大利润，选择正数的相加
// let a2 = function(prices) {
//     if(prices == '' || prices.length == 0)return
//     var num = 0
//     for (let i = 0; i < prices.length - 1; i++) {
//         if(prices[i + 1] - prices[i] >= 0) {
//             num = num + prices[i + 1] - prices[i]
//         }
//     }
//     return num
// }
// let b2 = [7,1,5,3,6,4]
// console.log('数组题二，答案：',a2(b2))

// let a3 = function (nums,k) {
//     if(nums === '' || nums.length ==0 ) return
//     if(k === 0) return nums
//     var change = 0
//     var n = nums
//     for(let i = 0; i < nums.length - 1; i++){
//         n[(i + k) % nums.length] = nums[i]
//     }
//     return n
// }
// let b3 = [1,2,3,4,5,6,7]
// console.log('数组题三，答案：',a3(b3,3))

// var generate = function(numRows) {
//     const a = []
//     for(let i = 0;i<numRows;i++) {
//         const r = []
//         r.length = i+1
//         r.fill(1)
//         for(let j = 1;j<r.length-1;j++) {
//             r[j] = a[i -1][j-1]+a[i-1][j]
//         }
//         a.push(r)
//     }
//     console.log(a)
// }
// generate(5)

// var twoSum = function(numbers, target) {
//         let a = 0
//         let b = numbers.length-1
//     for (let i = 0; i < numbers.length-1; i++) {
//         if(numbers[a] +numbers[b] !== target){
//             numbers[a] +numbers[b] >target?a++:b--
//         }
//     }
// };
// twoSum([1,2,3,4,4,9,56,90],8)

// var runningSum = function(nums) {
//     let n = []
//     for(let i = 0;i<nums.length;i++) {
//         let a = 0
//         for(let j = 0;j<i+1;j++){
//             a= a+nums[j]
//         }
//         n[i] = a
//     }
// };
// runningSum([1,1,1,1])

// var smallerNumbersThanCurrent = function(nums) {
//     const n = []
//     for(let i = 0;i<nums.length;i++) {
//         let a = 0
//         for (let j = 0; j < nums.length; j++) {
//             if(i ===j){
//                 continue
//             }else {
//                 if(nums[i]> nums[j]) {
//                     a++
//                 }
//             }
//         }
//         n[i] = a
//     }
//     return n
// };
// smallerNumbersThanCurrent([8,1,2,2,3])

// var singleNumber = function(nums) {
//     for(let i = 0; i<nums.length; i++) {
//         if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1]){
//             console.log(nums[i]);
//         }
//     }
// };
// singleNumber([2,2,1])
// var searchInsert = function(nums, target) {
//     nums.sort((a,b)=>a-b)
//     if(nums[0]>target){
//         console.log(0)
//     }
//     if(nums[nums.length-1]<target){
//         console.log(nums.length)
//     }
//     for(let i = 0; i<nums.length;i++) {
//         if(nums[i] === target) {
//             console.log(i);
//         }else {
//             if(nums[i]<target && nums[i+1]>target){
//                 console.log(i+1);
//             }
//         }
//     }

// };
// searchInsert([1,3,5,6],0)

// var findRepeatNumber = function(nums) {
//     nums.sort((a,b)=>a-b)
//     console.log(nums);
//     for(let i = 0;i<nums.length;i++) {
//         if(nums[i]=== nums[i+1]) {
//             console.log(nums[i]);
//         }
//     }
// };
// findRepeatNumber([3, 4, 2, 0, 0, 1])

// var merge = function(A, m, B, n) {
//     let c = 0
//     for (let i = m;i< A.length; i++){
//         A[i] = B[c]
//         c++
//     }
//     A.sort((a,b)=>a-b)
//     console.log(A);
// };
// merge([1,2,3,0,0,0],3,[2,5,6],3)

// var intersection = function(nums1, nums2) {
//     let n = 0
//     let a = []
//     for (let i = 0; i < nums1.length-1; i++) {
//         for(let j = 1;j<nums2.length;j++) {
//             if(nums1[i] === nums2[j] && a[n-1] !== nums1[i]) {
//                 a[n] = nums1[i]
//                 n++
//             }
//         }
//     }
//     console.log(a);
// //     let b = []
// //     let c = 0
// //     for(let i = 0;i<a.length;i++) {
// //         if(a[i] === a[i+1]){
// //             b[c] = a[i+1]
// //         }else {
// //             b[c] = a[i]
// //         }
// //         c++
// //     }
// // console.log(b);
// };

// intersection([1],[1])
// var printNumbers = function(n) {
//     let l = '0'

//     for (let i = 1; i < n; i++) {
//         l = l+'0'
//     }
//     const len = Number(1+l)-1
//     const a = []
//     a[0] = 1
//     for (let i = 1; i < len; i++) {
//         a[i] = a[i-1]+1
//     }
//     console.log(a);
// };
// printNumbers(2)
// var merge = function(nums1, m, nums2, n) {
//     if(m===0 && n === 0){
//         return nums1[0] = [1]
//     }
//     if(m ===0) {
//         nums1 = nums2
//         return nums1
//     }
//     if(n ===0) {
//         return nums1
//     }
//     for(let i = m;i<nums1.length;i++) {
//         nums1[i] = nums2[i-m]
//     }
//     return nums1.sort((a,b)=>a-b)
// };
// merge([0],0,[1],1)
// var sortedSquares = function(nums) {

//     for(let i = 0; i<nums.length;i++) {
//         nums[i] = nums[i]*nums[i]
//     }
//     return nums.sort((a,b)=>a-b)
// };
// sortedSquares([-4,-1,0,3,10])
// var kidsWithCandies = function(candies, extraCandies) {
//     const a = []
//     for (let i = 0; i < candies.length; i++) {
//         a[i] = false
//     }
//     for(let i = 0;i<candies.length;i++) {
//         candies[i] = candies[i] + extraCandies

//     }
// };
// kidsWithCandies([2,3,5,1,3],3)

// var search = function(nums, target) {
//     let l = 0
//     let r = nums.length-1
//     while(l<=r){
//         let mid = parseInt((l+r)/2)
//         if(nums[mid] === target){
//             console.log(mid);
//             return mid

//         }else if (nums[mid] < target){
//             l = mid +1
//         }else if (nums[mid] > target){
//             r = mid -1
//         }else {
//             console.log(-1);
//             return -1

//         }
//     }
// };
// search( [-1,0,3,5,9,12],9)
// var moveZeroes = function(nums) {
//     let n = -1
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] !== 0){
//             n++
//             nums[n] = nums[i]
//         }
//     }
//     for (let i = n+1; i < nums.length; i++) {
//         nums[i] = 0
//     }
//     console.log(nums);
// };
// moveZeroes([0,1,0,3,12])
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a, b) => a - b);
//     console.log(nums1);

// };
// merge([0],0,[1],1)

// var majorityElement = function(nums) {

// console.log(nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)]);


//     let condition = nums[0];
//     let count = 0;
//     for(num of nums){
//       if(count <= 0){
//             condition = num;
//             count = 0;
//         }
//         count = num == condition ? ++count : --count;
//         console.log(count);
//     }
//     console.log(condition);
// };
// majorityElement([2,2,1,1,1,2,2])

// var reversePrint = function(head) {
//     let n = []
//     let l = 0
//     for (let i = head.length-1; i >= 0; i--) {
//         n[l] = head[i]
//         l++
//     }
//     console.log(n);
// };
// reversePrint([1,3,2])


// var minArray = function(numbers) {
//     let l = 0,r = numbers.length-1
//     while(l<r){
//         let mid = Math.floor(numbers.length/2)
//         if(){}
//     }
// };
// minArray([2,2,2,0,1]
//     )

// var twoSum = function (nums, target) {

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(nums[i]+nums[j] === target) {
//                 console.log([i,j]);
//             }
//         }
//     }

//   };
//   twoSum( [2,7,11,15],9)
// var plusOne = function(digits) {
//     if(digits[digits.length-1] <9){
//         digits[digits.length-1] = digits[digits.length-1]+1
//         console.log(digits);
//     }else {
//         digits[digits.length-1] = digits[digits.length-1] + 1
//         for (let i = digits.length-1; i >=0; i--) {
//             if(digits[i] === 10) {
//                 if(i!== 0){
//                     digits[i-1] = digits[i-1]+1
//                     digits[i] = 0
//                 }else {
//                     digits[0] = 0
//                     digits.unshift(1)
//                 }
//             }
//         }
//         // console.log(digits);
//     }
// };

// plusOne([9,8,9])


// var missingNumber = function(nums) {

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i+1]-nums[i] !== 1) {
//             // nums.splice(i+1,0,nums[i]+1)
//             // console.log(nums);
//             // return nums
//             console.log(nums[i]+1);
//             return
//         }
//     }
// };
// missingNumber([0,1,2,3,4,5,6,7,9])

// var missingNumber = function(nums) {
//     nums.sort((a,b)=>a-b)
//     if(nums[0] === 1)return 0
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i+1]-nums[i] !== 1) {
//             // nums.splice(i+1,0,nums[i]+1)
//             // console.log(nums);
//             // return nums
//             console.log(nums[i]+1);
//             return
//         }
//     }
// };
// missingNumber([1])

// var findDisappearedNumbers = function(nums) {
//     nums.sort((a,b)=>a-b)
//     const n = []
//     let l = 0
//     console.log(nums);
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i+1]-nums[i] !== 1 && ) {
//             n[l] = nums[i]+1
//             l++
//         }
//     }
//     console.log(n);
// };
// findDisappearedNumbers([4,3,2,7,8,2,3,1])

// var intersection = function(nums1, nums2) {
//     let one = nums1.length
//     let two = nums2.length
//     if(one > two) {
//         let n = []
//         for (let i = 0; i < one; i++) {
//             for (let j = 0; j < two; j++) {
//                 if(nums1[i] === nums2[j]) {
//                     n.push(nums1[i])
//                 }
//             }
//         }
//         console.log(Array.from(new Set(n)));
//     }else {
//         let n = []
//         for (let i = 0; i < two; i++) {
//             for (let j = 0; j < one; j++) {
//                 if(nums2[i] === nums1[j]) {
//                     n.push(nums2[i])
//                 }
//             }
//         }
//         console.log(Array.from(new Set(n)));
//     }
// };
// intersection([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4])

// var massage = function(nums) {
//     let n = 0
//     if(nums.length ===3){
//         if(nums[0]+nums[2] >nums[1]){
//             console.log(nums[0]+nums[2]);
//         }else {
//             console.log(nums[1]);
//         }
//     }
//     for (let i = 0; i < nums.length-1; i++) {
//         if((i+1)%2 !== 0 && i!== nums.length-1){
//             n = n+nums[i]
//         }
//     }
//     console.log(n);
//     if(nums.length % 2 === 0 ){
//         if(nums[nums.length -1] > nums[nums.length -2]){
//             n = n-nums[nums.length -2] + nums[nums.length -1]
//         }

//     }else {
//         n = n+nums[nums.length -1]
//     }
//     console.log(n);
// };
// // massage([2,1,4,5,3,1,1,3])
// // massage([1,2,3,1])
// // massage([2,7,9,3,1])
// massage([1,3,1])

// var arraySign = function(nums) {
//     let n = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         n = n*nums[i]
//     }
//     console.log(n);
//     if(n>0){
//         return 1
//     }else if(n<0){
//         return -1
//     }else {
//         return 0
//     }

// };
// arraySign([-1,-2,-3,-4,3,2,1])

// var truncateSentence = function(s, k) {
//     let a = s.split(' ')
//     let str = ''
//     console.log(a);
//     for (let i = 0; i < k-1; i++) {
//         str = str + a[i]+' '
//     }
//     console.log(str);
// };
// truncateSentence("Hello how are you Contestant",4)

// var createTargetArray = function(nums, index) {
//     let n = []
//     for (let i = 0; i < index.length; i++) {
//         n.splice(index[i],0,nums[i])
//     }
//     console.log(n);
// };
// createTargetArray([0,1,2,3,4],[0,1,2,2,1])

// var missingNumber = function(nums) {
//     nums.sort((a,b)=>a-b)
//     if(nums.length === 1){
//         console.log(nums[0] === 0 ? 1 : 0);
//         // return nums[0] === 0 ? 1 : 0
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i+1]!== nums[i]+1){
//             console.log(nums[i]+1);
//         }
//     }
// };
// missingNumber([0,1])

// var sumZero = function(n) {
//     if(n===1)return [0]
//     let arr = new Array(n).fill(0)
//     // console.log(arr);
//     let a = Number(-n)

//     arr[0] = a
//     arr[1] = n
//     return arr

// };
// sumZero(2)

// var arrayStringsAreEqual = function(word1, word2) {
//     return word1.join('')===word2.join('') ? true : false
// };
// arrayStringsAreEqual(["ab", "c"],["a", "bc3"])

// var average = function(salary) {
//     const min = Math.min(...salary)
//     const max = Math.max(...salary)
//     console.log(min,max);
//     let n = 0
//     let l = salary.length-2
//     for (let i = 0; i < salary.length; i++) {
//         n = n+salary[i]
//     }
//     return (n-min-max)/l
// };
// average([4000,3000,1000,2000])

// var sumOfUnique = function(nums) {
//     let len = nums.length
//     let n = []
//     for (let i = 0; i < len; i++) {
//         for (let j = i+1; j < len; j++) {
//             if(nums[i] === nums[j]){
//                 n.push(nums[i])
//             }
//         }
//     }
//     console.log(n);
//     n = Array.from(new Set(n))
//     for (let i = 0; i < n.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if(n[i] === nums[j]){
//                 delete nums[j]
//             }
//         }
//     }
//     console.log(nums);
//     let a = 0
//     for (let i = 0; i < nums.length; i++) {
//         if(Number(nums[i])){
//             a = a+nums[i]
//         }

//     }
//     console.log('a',a);
// };
// // sumOfUnique([1,2,3,2])
// // sumOfUnique([1,2,3,4,5])
// sumOfUnique([1,1,1,1,1])

// var buildArray = function(nums) {

//     let arr = []
//     for (let i = 0; i < nums.length; i++) {
//         arr[i] = nums[nums[i]]
//     }
//     console.log(arr);
// };

// buildArray([0,2,1,5,3,4])

// var twoOutOfThree = function(nums1, nums2, nums3) {
//     const n1 = Array.from(new Set(nums1))
//     const n2 = Array.from(new Set(nums2))
//     const n3 = Array.from(new Set(nums3))
//     const n = n1.concat(n2.concat(n3))
//     const arr = []
//     for (let i = 0; i < n.length; i++) {
//         for (let j = 1; j < n.length; j++) {
//             if(n[i] === n[j] && i !== j){
//                 arr.push(n[i])
//             }
//         }
//     }
//     console.log(Array.from(new Set(arr)));
// };
// twoOutOfThree([1,1,3,2],[2,3],[3])

// var kthDistinct = function(arr, k) {
//     const len = arr.length
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if(arr[i] === arr[j] && i !== j){
//                 delete arr[i]
//                 delete arr[j]
//             }
//         }
//     }
//     let a = arr.filter(d => d)
//     console.log(a);
//     // return a[k]?a[k]:''
//     console.log(a[k-1] ? a[k-1] : '');
// };
// kthDistinct(
//     ["meio","l","xhb","p","psuzr","hrp","bhqxm","ccqrl","d","nix","ce","bkm","jvqh","c","mpah","uh","z","hin","ekaxo","cpcy","cmvj","glnrk","uqem","vq","tw","p","tqlrv","uxf","kzxf","tjd","arm","iqfc","fmze","txq","ij","rlqv","j","up","om","hdvku","tkp","hm","vdbdd","lbmc","bpx","mqy","ddecp","zmdg","ik","msy","pzohq","fuj","s","bbb","qhy","nbz","xbhvi","dh","w","nznd","lvl","nru","y","q","jciw","lmnmm","e","lvnrk","eoi","fp","neq","wuw","qsjga","fy","qvg","dqjd","rb","ck","uhall","qcly","q","igv","uq","ijjqt","er","yxx","wyx","jlasw","aln","ohy","vf","gpzy","mywlj","xf","cgwl","wyjli","pyow","i","upic","mpze","ol","z","mxwb","iouzk","zfx","f","y","gsvv","hi","x","qgj","zvnz","vb","yyl","m","uwyhh","qgd","qcbky","h","wqiyo","ey","uqjn","ma","h","phnc","ozptm","rwk","w","yfw","lkfbb","hvaq","hh","arhm","rz","gtvi","tgpyt","np","e","z","cmodm","jhhga","yal","unhsp","acg","yn","d","vndjs","ntrj","rmixt","fh","xjs","oib","mk","p","rrhep","zdk","dyy","eox","hrtr","n","ty","nj","o","s","ewt","dyvn","hrejt","vkzj","y","swzzb","dnelj","ow","pv","c","muc","unvy","vnbk","nkwte","ef","bminn","zjgcy","u","g","fwks","cjtv","ximu","oiwp","h","h","zpbm","w","h","h","vqbq","mg","xopv","m","zceki","rn","abiwc","bid","gjvsu","pv","i","cemf","x","jrxa","ye","vovg","uhlp","enpj","oyr","mgrvo","jk","kuqe","q","k","v","gzo","zcx","ylj","kmt","x","byudz","eh","lonmh","iqnx","apzod","vif","f","bq","ik","utjnj","bx","c","oyf","kqp","zc","oxpi","t","pagk","yrup","xly","o","ipndf","qy","rqfnp","c","abnh","gm","yvzh","jro","gjxq","ir","oicxq","yplnw","rxji","cdwr","nmnv","qeiht","bu","gg","jlg","ajvqg","bumzg","lpuf","lzypp","fpxj","uwyqf","c","e","flubx","cb","se","mfw","wmerw","xun","xq","hkuiw","z","ffop","qvc","xl","yp","v","lv","ij","au","m","yjlxq","oqfne","ave","oqc","qlly","zf","pa","h","pfr","vhee","gh","lswh","si","p","nwzeb","cy","fbddc","xkvqd","smhl","t","gdlvc","umj","xujwi","sqjvz","m","bkvv","tdkg","nbk","m","wvvc","d","mlpn","zi","wemrh","qv","xww","gzq","qa","nqcp","hat","jqdg","bjz","pozj","ehv","bqct","pihs","yodi","yaxhs","if","xlw","ums","v","pa","accg","wcfdf","t","j","tlijm","twibw","q","gq","w","cyrop","von","crdtn","tjt","sldvo","ykyg","wi","uej","zmqda","b","rbim","r","r","cknvt","drmac","mnxm","bsgw","c","vwyil","hblbj","ddzr","ixe","s","yd","dx","bj","fxtmw","mbxvz","kwut","cpnt","ctr","r","a","bmxg","ecr","guofg","c","eczhh","sunz","ic","d","nu","xtle","w","ckb","fnelp","z","kpdw","pe","lz","me","vbc","sk","n","gp","fud","qphr","bbius","jyqa","anhge","tuqse","d","fi","wmrn","heds","djyrj","vv","e","cf","gylm","mdswr","jxyc","stn","uo","hyjt","nl","wcay","oee","ng","dwaii","d","kkxpi","jxir","wsv","lkz","tyf","fenfb","xfzi","o","yf","xq","etvcv","c","ajv","qm","hbfy","krzac","nd","oymuu","fsok","sblyv","fgubg","bxy","clex","cbny","y","kfgi","e","lpjd","wuq","um","trv","mkgb","dtdcj","xuetk","cj","hhzl","jcni","wk","jtrcp","jbkju","hwrr","tlbw","xypv","qmsbe","gkzm","lmwz","gwyw","yuq","uz","cq","jatsr","jpd","xw","ebfoa","kbr","zvtl","bhqhj","en","jvj","ua","pth","joral","pw","wlw","vvddv","pnx","v","u","fy","drdf","m","xepi","e","rtk","byqvc","ewu","k","d","nef","lihc","puvu","hdi","ymcnd","vwo","dripr","jloqq","jyy","b","fbzn","fth","ptzw","u","rcjjy","udm","rb","nky","txz","w","wkx","kp","ay","ots","adkr","u","tmh","ayqc","cs","ulzbt","tnz","rha","he","ly","fhanm","julf","vwpap","m","fzlx","tc","sohc","x","u","hwdgu","tdlcd","dhlq","tvs","ftam","fyjg","kq","qlww","gbn","bw","tqx","kcfmg","lahfo","ipst","pyddr","ua","ilhj","fdor","ch","lp","gcduz","trjo","kuz","rizf","xmzg","pyykm","idr","adog","i","lrot","vu","r","phbq","sbvpo","x","tb","hh","xzco","xbx","z","ccgr","xdo","qb","mf","lcib","rsir","zgyxt","zpvai","yi","clyuu","nix","h","lndqw","odz","rkjnh","bl","hhuwe","eqnmj","yt","zb","dhm","mdxow","sdhd","ugybz","caf","jfjxw","ztuoz","mxoz","e","tdo","zp","yc","tg","rtki","z","icppp","ficph","oq","jmxj","nor","dlhp","iaca","qin","qghtw","n","mrjtx","bx","fmyfr","pp"]
//     ,374)

// var mostWordsFound = function(sentences) {
//     const arr = []
//     for (let i = 0; i < sentences.length; i++) {
//         let a = sentences[i].split(' ')
//         arr[i] = a.length
//     }
//     console.log(Math.max(...arr));
// };
// mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])


// var fib = function(n) {
//     if (n < 2) return n
//     let l = 0, center = 0, r = 1;
//     // debugger
//     for (let i = 2; i <= n; i++) {
//         l = center;
//         center = r;
//         r = l + center;
//     }
//     return r;
// };
// fib(5)

// var tribonacci = function(n) {
//     if (n === 0)return 0;
//     if (n <= 2)return 1;
//     let l = 0, leftCenter = 0, rightCenter = 1, r = 1
//     for (let i = 3; i <= n; i++) {
//         l = leftCenter
//         leftCenter = rightCenter
//         rightCenter = r
//         r = l + leftCenter + rightCenter
//     }
//    return r
// };
// tribonacci(25)

// var modifyString = function(s) {
//     const arr = s.split('')
//     const abc = [
//         'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
//     ]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === '?' ){
//             let ran = abc[Math.floor(Math.random() * 26)]
//             while(ran === arr[i+1] || ran === arr[i-1]){
//                 ran = abc[Math.floor(Math.random() * 26)]
//             }
//             arr.splice(i,1,ran)
//         }
//     }
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//        str = srt + arr[i]

//     }
//     return str
// };
// modifyString('ubv?w')

// var climbStairs = function(n) {
//     if(n === 1)return 1
//     if(n === 2)return 2
//     let l = 0,center = 1,r = 1
//     debugger
//     for (let i = 2; i <= n; i++) {
//         l = center
//         center = r
//         r = l + center
//     }
//     console.log(r);
// };
// climbStairs(4)

// var minCostClimbingStairs = function(cost) {
//         const n = cost.length;
//         let prev = 0, curr = 0;
//         debugger
//         for (let i = 2; i <= n; i++) {
//             let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
//             prev = curr;
//             curr = next;
//         }
//         console.log(curr);;
// };
// minCostClimbingStairs([10,15,20])
// minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])
// var isValid = function (s) {
//     if (s.length === 0 || s.length % 2 !== 0) return false
//     const arr = s.split('')
//     const stack = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '{' || arr[i] === '[' || arr[i] === '(') {
//             stack.push(arr[i])
//             continue
//         }
//         if (arr[i] === '}' || arr[i] === ']' || arr[i] === ')') {
//             if (
//                 (stack[stack.length - 1] === '{' && arr[i] === '}') ||
//                 (stack[stack.length - 1] === '[' && arr[i] === ']') ||
//                 (stack[stack.length - 1] === '(' && arr[i] === ')')
//             ) {
//                 stack.pop()
//             } else {
//                 return false
//             }

//         }
//     }
//     return stack.length === 0 ? true : false
// };
// isValid('{[]}')
// isValid('()')
// isValid("()[]{}")
// isValid("(]")
// isValid("([)]")
// isValid("((")

// var longestCommonPrefix = function(strs) {
//     let l = 0
//     let n = strs[0][l]
//     for (let i = 0; i < strs.length; i++) {
//         if(strs[i][l] !== n){
//             console.log(strs[0].substring(0,l));
//         }else {
//             if(i === strs.length-1){
//                 i = 0
//                 l++
//                 n = strs[0][l]
//             }
//         }
//     }
// };
// // longestCommonPrefix( ["flower","flow","flight"])
// longestCommonPrefix(["dog","racecar","car"])



// var reverseString = function(s) {
//     const r = s.length-1
//     for (let i = s.length; i >0 ; i--) {
//         s.push(s[i-1])
//     }
//     let b = s.splice(0,r+1)
//     console.log(b);
// };
// reverseString(["h","e","l","l","o"])

// var reverseLeftWords = function(s, n) {

//     const arr = s.split('')
//     for (let i = 0; i < n; i++) {
//         arr.push(arr[i])
//     }
//     let str = ''
//     for (let i = n; i < arr.length; i++) {
//         str = str + arr[i]
//     }
//     console.log(str);
// };
// reverseLeftWords("abcdefg",2)

// var isUnique = function(astr) {
//     const arr = astr.split('')
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i] === arr[j] && i !== j){
//                 console.log(false);
//                 return false
//             }
//         }
//     }
//     console.log(true);
//     return true
// };
// isUnique('leetcode')
// isUnique('abc')


// var reverseWords = function(s) {
//     let arr = []
//     let n = 0
//     console.log(s.length);
//     for (let i = 0; i < s.length; i++) {

//         if(s[i] !== ' '){
//             arr[n] = (arr[n]?arr[n]:'')+s[i]
//         }else {
//             n++
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split('').reverse().join('')
//     }
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         str = str + ' ' + arr[i]
//     }
//     return str.replace(' ','')
// };

// reverseWords("Let's take LeetCode contest")
// var sortArrayByParityII = function(nums) {
//     const arr = []
//     let n = 0,d = 1
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] % 2 === 0){
//             arr[n] = nums[i]
//             n = n+2
//         }else {
//             arr[d] = nums[i]
//             d = d+2
//         }
//     }
//     console.log(arr);

// };
// sortArrayByParityII([4,2,5,7])


// var shuffle = function(nums, n) {

//     let arr = []
//     let s = 0
//     let d = 0
//     for (let i = 0; i < nums.length; i++) {
//         if(i % 2 === 0){
//              arr[i] = nums[s]
//              s++
//         }
//         else {
//             arr[i] = nums[n+d]
//             d++
//         }
//     }
//     console.log(arr);
// };
// shuffle([2,5,1,3,4,7],3)


// var toLowerCase = function(s) {
//     const arr = s.split('')
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].charCodeAt() <= 90 && arr[i].charCodeAt() >= 65) {
//             let n = arr[i].charCodeAt()+32
//             arr[i] = String.fromCharCode(n)
//         }
//     }
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         str = str + arr[i]
//     }
//     console.log(str);
// };
// toLowerCase("Hello")
// toLowerCase("here")
// toLowerCase("LOVELY")


// var sortArrayByParity = function(nums) {
//     let arr = []
//     let l = 0,r = nums.length-1
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2 === 0){
//             arr[l] = nums[i]
//             l++
//         }else {
//             arr[r] = nums[i]
//             r--
//         }
//     }
//     console.log(arr);
// };
// sortArrayByParity([3,1,2,4])

// var subtractProductAndSum = function(n) {
//     const arr = String(n).split('')
//     console.log(arr);
//     let j =  h = Number(arr[0])
//     for (let i = 1; i < arr.length; i++) {
//         j = j *  arr[i]
//         h = h + Number(arr[i])
//     }
//     return j-h
// };
// subtractProductAndSum(234)

// var construct2DArray = function(original, m, n) {
//     if(
//         original.length < n*m ||
//         original.length > n*m
//         )return []
//     const arr = []
//     let l = 0
//     for (let i = 0; i < m; i++) {
//         arr[i] = []
//         for (let j = 0; j < n; j++) {
//             arr[i][j] = original[l]
//             l++
//         }
//     }
//     console.log(arr);
// };
// construct2DArray([1,2,3,4],2,2)
// construct2DArray([1,2,3],1,3)
// construct2DArray([1,2],1,1)

// var rotateString = function(s, goal) {
//     if(s === goal)return true
//     const arr = s.split('')
//     const len = arr.length
//     for (let i = 0; i < len; i++) {
//         arr[arr.length] = arr[0]
//         arr.splice(0,1)
//         let str = ''
//         for (let i = 0; i < arr.length; i++) {
//             str= str + arr[i]
//         }
//         if(str === goal){
//             console.log(str,goal,true);
//             return true
//         }
//     }
//     console.log(false);
//     return false
// };
// rotateString('abcde','cdeab')
// var addTwoNumbers = function(l1, l2) {
//     let num1 = '',num2 = ''
//     for (let i = l1.length-1; i >= 0 ; i--) {
//         num1 = num1 + l1[i]
//     }
//     for (let i = l2.length-1; i >= 0 ; i--) {
//         num2 = num2 + l2[i]
//     }
//     const arr = String(Number(num1) + Number(num2)).split('').reverse()
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Number(arr[i])
//     }
//     console.log(arr);
//     return arr
// };
// addTwoNumbers([2,4,3],[5,6,4])
// addTwoNumbers([0],[0])

// var lengthOfLastWord = function(s) {
// const arr = s.split('')
// let str = ''
// for (let i = arr.length-1; i >= 0 ; i--) {
//     if(arr[i] !== ' '){
//         str = str + arr[i]
//         if(arr[i-1] === ' '|| i=== 0 ) {
//             return str.length
//         }
//     }
// }
// }
// lengthOfLastWord('a')
// var replaceSpace = function(s) {
//     const arr = s.split('')
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === ' ') {
//             str = str + '%20'
//         }else {
//             str = str + arr[i]
//         }
//     }
//     console.log(str);
// };
// replaceSpace("We are happy.")
// var reverseWords = function(s) {
//     const arr = s.split('')
//     const len = arr.length
//     let str = ''
//     let n = 0
//     const a = []
//     for (let i = 0; i < len; i++) {
//        if(arr[i] !== ' '){
//             str = str + arr[i]
//             console.log(str);
//             if(arr[i+1] === ' '|| i === len-1){
//                 a[n] = str
//                 n++
//                 str = ''
//             }
//        }
//     }
//     console.log(a);
//     console.log(a.reverse().join(' '));
//    console.log(a.reverse().join(' '));
// return a.reverse().join(' ')
// };
// reverseWords("  hello world!   abc    ")
// reverseWords("the sky is blue")

// var xorOperation = function(n, start) {
//     const arr = new Array(n)
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = start + 2 * i
//     }
//     console.log(arr);
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         if(i !== arr.length){
//             str = arr[i] ^ arr[i+1]
//         }
//     }
//     console.log(str);

// };
// xorOperation(5,0)
// xorOperation(4,3)
// xorOperation(1,7)
// xorOperation(10,5)

// var game = function(guess, answer) {
//     let n = 0
//     for (let i = 0; i < guess.length; i++) {
//         if(guess[i] === answer[i]){
//             n++
//         }
//     }
//     return n
// };
// game([1,2,3],[1,2,3])

// var reverseOnlyLetters = function(s) {
// const arr = s.split('')
// const a = []
// //A-Z，65-90含
// //a-z，97-122含
// // arr[i].charCodeAt()//ascii转 数字
// // String.fromCharCode(n)//转ascii

// for (let i = 0; i < arr.length; i++) {
//     if(
//         (arr[i].charCodeAt()>=65 && arr[i].charCodeAt()<=90) ||
//         (arr[i].charCodeAt()>=97 && arr[i].charCodeAt()<=122)
//     ){
//         a.push(arr[i])
//     }
// }
// a.reverse()
// let idx = 0
// for (let i = 0; i < arr.length; i++) {
//     if(
//         (arr[i].charCodeAt()>=65 && arr[i].charCodeAt()<=90) ||
//         (arr[i].charCodeAt()>=97 && arr[i].charCodeAt()<=122)
//     ){
//         arr[i] = a[idx]
//         idx++
//     }
// }
// let str = ''
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i]
// }
// console.log(str);
// };
// reverseOnlyLetters('a-bC-dEf-ghIj')
// reverseOnlyLetters('"Test1ng-Leet=code-Q!"')

// var restoreString = function(s, indices) {

//     const arr = s.split('')
//     let str = ''
//     // for (let i = 0; i < arr.length; i++) {
//     //     str = str + arr[indices[i]]
//     // }
//     for (let i = 0; i < indices.length; i++) {
//         // if(indices[i] === arr){}
//         arr[indices[i]] = s[i]
//     }
//     for (let i = 0; i < arr.length; i++) {
//         str = str + arr[i]
//     }
//     console.log(str);
// };
// restoreString('codeleet',[4,5,6,7,0,2,1,3])

// var arrayRankTransform = function(arr) {
//     let n = 1
//     let l = 0
//     let r = 0
//     const len = arr.length
//     const a = []
//     // debugger
//     while(l < len){
//         if(arr[l] > arr[r] && r < len && l !== r){
//             n++
//         }
//         r++
//         if(r === len){
//             a[l] = n
//             l++
//             r = 0
//             n = 1
//         }
//     }
//     console.log(a);
// };
// // arrayRankTransform([40,10,20,30])
// // arrayRankTransform([100,100,100])
// arrayRankTransform([37,12,28,9,100,56,80,5,12])

// var isPalindrome = function(x) {
//     if(x < 0) return false
//     const str = String(x).split('').reverse().join('')
//     if(x === Number(str)) {
//         return true
//     }else {
//         return false
//     }

// };
// isPalindrome(121)

// var totalMoney = function(n) {
//     if(n < 7) {
//         let num = 0
//         for (let i = 1; i <= n; i++) {
//             num = num + i
//         }
//         return num
//     }
//     const y = n % 7
//     const week = Math.floor(n / 7)
//     let money = 0
//     // debugger
//     for (let i = 1; i <= week; i++) {
//         for (let j = 0; j < 7; j++) {
//             money = money + i + j
//         }
//     }
//     for (let i = 1; i <= y; i++) {
//         money = money + week+i
//     }
//     console.log(money);
// };
// totalMoney(20)
// var findTheDifference = function(s, t) {
//     if(s.length === 0)return t
//     const s_arr = s.split('')
//     const t_arr = t.split('')

//     let str = ''

//     if(s_arr.length > t_arr.length) {
//         for (let i = 0; i < s_arr.length; i++) {
//             if(s_arr[i] !== t_arr[i] && t_arr[i] !== undefined){
//                 str = str + t_arr[i]
//             }
//         }
//     }else {
//         for (let i = 0; i < t_arr.length; i++) {
//             if(s_arr[i] !== t_arr[i]){
//                 str = str + t_arr[i]
//             }
//         }
//     }
//     console.log(str);
// };
// findTheDifference('abcd','abcde')
// findTheDifference('','y')
// findTheDifference('a','aa')

// var majorityElement = function(nums) {
//     // nums.sort((a,b)=>a-b)
//     // console.log(nums[Math.floor(nums.length/2)]);
//     console.log(nums[Math.floor(nums.sort((a,b)=>a-b).length/2)]);
// };
// majorityElement([2,2,1,1,1,2,2])
// majorityElement([3,2,3])

// var numJewelsInStones = function(jewels, stones) {
//     const arr1 = jewels.split('')
//     const arr2 = stones.split('')
//     const a = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]){
//                 a.push(arr1[i])
//             }
//         }
//     }
//     console.log(a);
// };
// numJewelsInStones('aA','aAAbbbb')
// numJewelsInStones('z','ZZ')
// var countStudents = function(students, sandwiches) {
//     let n = 0
//     // debugger
//     while(n < sandwiches.length){
//         if(students[0] === sandwiches[0]){
//             students.splice(0,1)
//             sandwiches.splice(0,1)
//             n = 0
//         }else {
//             students[students.length] = students[0]
//             students.splice(0,1)
//             n++
//         }
//     }
//     console.log(students.length);

// };
// 110,100
// countStudents([1,1,0],[1,0,0])
// countStudents([1,1,0,0],[0,1,0,1])
// countStudents([1,1,1,0,0,1],[1,0,0,0,1,1])


// var timeRequiredToBuy = function(tickets, k) {
//     let s = 0
//     let l = 0
//     while(tickets[k] !== 0){
//         if(tickets[l] > 0){
//             tickets[l]--
//             s++
//         }
//         l++
//         if(l === tickets.length){
//             l = 0
//         }
//     }
//     console.log(s);
// };
// timeRequiredToBuy([2,3,2],2)
// timeRequiredToBuy([5,1,1,1],0)

// var numberOfMatches = function(n) {
//     let l = 0
//     while(n >= 2){
//         if(n % 2 === 0){
//             l = l+n/2
//             n = n/2
//         }else {
//             n = Math.ceil(n/2)
//             l = l+n-1
//         }
//     }
//     console.log(l);
// };
// numberOfMatches(2)
// numberOfMatches(3)
// numberOfMatches(7)
// numberOfMatches(14)

// var calPoints = function(ops) {
//     const arr = []
//     // debugger
//     for (let i = 0; i < ops.length; i++) {
//         if(Number(ops[i])){
//             arr.push(Number(ops[i]))
//         }else {
//             switch(ops[i]){
//                 case 'C':
//                     arr.pop()
//                     break
//                 case 'D':
//                     arr.push(2*Number(arr[arr.length-1]))
//                 break
//                 default:
//                     arr.push(arr[arr.length-1]+arr[arr.length-2])

//             }
//         }
//     }
//     let a = 0
//     for (let i = 0; i < arr.length; i++) {
//         a = a+arr[i]
//     }
//     console.log(a);
// };
// calPoints(['5','2','C','D','+'])
// calPoints(["5","-2","4","C","D","9","+","+"])
// calPoints(['1'])

// var backspaceCompare = function(s, t) {
//     const arr1 = s.split('')
//     const arr2 = t.split('')
//     let l = 0
//     // debugger
//     while(l<arr1.length){
//         if(arr1[l] === '#'){
//             if(l >= 2){
//                 arr1.splice(l-1,2)
//             }else {
//                 arr1.shift()
//             }
//             l = l-2 === -1?0:l-2
//         }else {
//             l++
//         }

//     }
//     l = 0
//     while(l<arr2.length){
//         if(arr2[l] === '#'){
//             if(l >= 2){
//                 arr2.splice(l-1,2)
//             }else {
//                 arr2.shift()
//             }
//             l = l-2 === -1?0:l-2
//         }else {
//             l++
//         }

//     }
//     // return arr1.join('') === arr2.join('')
//     console.log(arr1.join('') === arr2.join(''));
//     console.log(arr1,arr2);
// };
// // backspaceCompare('ab#c','ad#c')
// // backspaceCompare('ab##','c#d#')
// // backspaceCompare('a##c','a##c')
// // backspaceCompare('a#c','b')
// backspaceCompare("y#fo##f",
// "y#f#o##f")

// var searchRange = function(nums, target) {
//     let l = 0
//     const arr = []
//     // debugger
//     while(l < nums.length){
//         if(nums[l] === target){
//             arr.push(l)
//         }
//         l++
//     }
//     if(arr.length > 1){
//         console.log([arr[0],arr[1]]);
//         return [arr[0],arr[arr.length -1]]
//     }else if(arr.length === 1){
//         console.log([arr[0],arr[0]]);
//         return [arr[0],arr[0]]
//     }else {
//         console.log([-1,-1]);
//         return [-1,-1]
//     }
// };
// searchRange([5,7,7,8,8,10],8)
// searchRange([5,7,7,8,8,10],6)
// searchRange([],0)
// searchRange([1],1)
// searchRange([2,2],2)

// var licenseKeyFormatting = function(s, k) {
//     const arr = s.split('')
//     let l = 0
//     while(l < arr.length){
//         if(arr[l] === '-'){
//             arr.splice(l,1)
//         }else {
//             l++
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122){
//             let n = arr[i].charCodeAt()-32
//             arr[i] = String.fromCharCode(n)
//         }
//     }
//     l = 0
//     let n = 1
//     let str = ''
//     let start = arr.length % k
//     let arr1 = []
//     if(start !== 0){
//         arr1 = arr.slice(0,start)
//         arr.splice(0,start===1?1:start-1)
//         l = start-1
//     }
//     console.log(arr1,arr);
//     while(l<arr.length){
//         str = str + arr[l]
//         if(n > k-1){
//             if(l !== arr.length-1){
//                 str = str + '-'
//             }
//             n = 1
//         }else {
//             n++
//         }

//         l++
//     }
//     console.log(arr1.join('')?arr1.join('')+'-'+str:str);
// };
// // licenseKeyFormatting('5F3Z-2e-9-w',4)
// licenseKeyFormatting('2-5g-3-J',2)
// licenseKeyFormatting("2-4A0r7-4k",3)
// licenseKeyFormatting("2",1)

// var rotate = function (nums, k) {
//     // let n = 0
//     // while (n < k) {
//     //     const i = nums[nums.length - 1]
//     //     nums.pop()
//     //     nums.unshift(i)
//     //     n++
//     // }
//     // console.log(nums);
//     const arr = nums.splice(nums.length - k, nums.length - k)
//     const n = arr.concat(...nums)
//     console.log(n);
// };
// rotate([1, 2, 3, 4, 5, 6, 7], 3)
// rotate([-1,-100,3,99],2)
// var firstUniqChar = function(s) {
//     const arr = s.split('')
//     let l = 0
//     let r = 1
//     let boo = true
//     // debugger
//     while(l < arr.length && boo){
//         if(arr[l] === arr[r]){
//             l++
//             r = l+1
//             continue
//         }
//         r++
//         if(r > arr.length){
//             l++
//             boo = false
//             break
//         }
//     }
//     if(!boo){
//         console.log(l);
//     }else {
//         console.log(-1)
//     }

// };
// firstUniqChar("bba")
// firstUniqChar('leetcode')
// firstUniqChar('loveleetcode')
// firstUniqChar("aadadaad")

// var sortColors = function(nums) {
//     let l = 0
//     let r = 1
//     while(l < nums.length){
//         if(nums[l] > nums[r]){
//             const temp = nums[r]
//             nums[r] = nums[l]
//             nums[l] = temp
//         }
//         r++
//         if(r >= nums.length){
//             l++
//             r = l+1
//         }
//     }
//     console.log(nums);
// };
// sortColors([2,0,1])
// sortColors([2,0,2,1,1,0])

// var findKthLargest = function(nums, k) {
//     nums.sort((a,b)=>b-a)
//     console.log(nums[k-1]);
// };
// findKthLargest([3,2,1,5,6,4],2)
// findKthLargest([3,2,3,1,2,4,5,5,6],4)

// var findDuplicate = function(nums) {
//     let l = 0
//     let r = 1
//     while(l < nums.length){
//         if(nums[l] === nums[r]){
//             console.log(nums[l]);
//             return
//         }
//         r++
//         if(r >= nums.length){
//             l++
//             r = l+1
//         }
//     }
// };
// findDuplicate([1,3,4,2,2])
// findDuplicate([3,1,3,4,2])
// findDuplicate([1,1,2])

// var dailyTemperatures = function(temperatures) {
//     let l = 0
//     let r = 1
//     const arr = []
//     while(l<temperatures.length){
//         if(temperatures[l] <temperatures[r]){
//             arr[l] = (r-l)
//             l++
//             r = l+1
//             continue
//         }
//         r++
//         if(r >= temperatures.length){
//             l++
//             r = l+1
//         }

//     }
//     for (let i = 0; i < temperatures.length; i++) {
//         if(!arr[i]){
//             arr[i] = 0
//         }
//     }
//     console.log(arr);
// };
// dailyTemperatures([30,40,50,60])
// dailyTemperatures([73,74,75,71,69,72,76,73])

// var checkPerfectNumber = function(num) {
//     let n = 0
//     for (let i = 1; i < num; i++) {
//         // console.log(num % i);
//         if(num % i === 0){
//            n = n+i
//         }
//         if(n === num){
//             console.log(n,num);
//             console.log(true);
//             return
//         }
//     }
//     console.log(n === num);
// };
// // checkPerfectNumber(7)
// // checkPerfectNumber(5)
// checkPerfectNumber(2016)

// var singleNumber = function(nums) {
//     nums.sort((a,b)=>b-a)
//     if(nums[0] !== nums[1])return nums[0]
//     if(nums[nums.length - 1] !== nums[nums.length - 2])return nums[nums.length - 1]
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]){
//             console.log(nums[i]);
//             return
//         }
//     }
// };
// singleNumber([2,2,3,2])
// singleNumber([0,1,0,1,0,1,99])
// singleNumber([0,0,1,0,2,2,2])


// var findFinalValue = function(nums, original) {
//     nums.sort((a,b)=>a-b)
//     let n = original
//     let l = 0
//     while(l < nums.length){
//         if(nums[l] === n){
//             n = n * 2
//         }
//         l++
//     }
//     console.log(n);
// };
// findFinalValue([5,3,6,1,12],3)
// findFinalValue([2,7,9],4)

// var maxScoreIndices = function(nums) {
//     const arr = []
//     const len = nums.length
//     let r = 0
//     let l = 0
//     // debugger
//     for (let i = 0; i < len; i++) {
//         if(nums[i] === 1){
//             r++
//         }
//     }
//     for (let i = 0; i < len+1; i++) {
//         arr[i] = l+r
//         if(nums[i] === 0){
//             l++
//         }else if(nums[i] === 1) {
//             r--
//         }
//         delete nums[i]
//     }
//     const max = Math.max(...arr)
//     const res = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === max){
//             res.push(i)
//         }
//     }
//     console.log(res);
// };
// maxScoreIndices([0,0,1,0])
// maxScoreIndices([0,0,0])
// maxScoreIndices([1,1])


// var numberOfSteps = function (num) {
//     let n = 0
//     while (num > 0) {
//         if (num % 2 === 0) {
//             num = num / 2
//         } else {
//             num--
//         }
//         n++
//     }
//     console.log(n);
// };
// numberOfSteps(14)
// numberOfSteps(8)
// var findDuplicates = function (nums) {
//     nums.sort((a, b) => a - b)
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             arr.push(nums[i])
//             i++
//         }
//     }
//     console.log(arr);
// };
// findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
// findDuplicates([1, 1, 2])
// findDuplicates([1])

// var countArrangement = function (n) {
//     const arr = []
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
//     }
//     console.log(arr);
// };
// countArrangement(2)
// var shiftingLetters = function (s, shifts) {
//     const arr = s.split('')
//     let n = ''
//     for (let i = 0; i < shifts.length; i++) {
//         if (arr[i].charCodeAt() + shifts[i] > 122) {
//             const a = arr[i].charCodeAt() + shifts[i] - 122 + 97
//             console.log('1', a);
//             n = n + String.fromCharCode(a)
//         } else {
//             console.log('2', arr[i].charCodeAt() + shifts[i]);
//             n = n + String.fromCharCode(arr[i].charCodeAt() + shifts[i])
//         }
//     }
//     console.log(n);
// };
// shiftingLetters('abc', [3, 5, 9])

// var firstUniqChar = function (s) {

//     const arr = s.split('')
//     let l = 0
//     let r = 0
//     let n = 0
//     // debugger
//     while (l < arr.length) {
//         if (arr[l] !== arr[r] && l !== r) {
//             n++
//             if (n === arr.length - 1) {
//                 // console.log(l);
//                 return l
//             }
//         }
//         r++
//         if (r >= arr.length) {
//             r = 0
//             l++
//             n = 0
//         }
//     }
//     return -1

// };
// firstUniqChar('leetcode')
// firstUniqChar('loveleetcode')

// var findTheDifference = function (s, t) {
//     if (!s) return t
//     const arr1 = s.split('')
//     const arr2 = t.split('')
//     while (arr1.length) {
//         if (arr1[0] === arr2[0]) {
//             arr1.splice(0, 1)
//             arr2.splice(0, 1)
//         } else {
//             const n = arr2[0]
//             arr2.splice(0, 1)
//             arr2.push(n)

//         }
//     }
//     console.log(arr2[0]);
// };
// findTheDifference('abcd', 'eabcd')
// var addStrings = function (num1, num2) {


// };
// addStrings("9333852702227987", "85731737104263")

// var reverseStr = function (s, k) {
//     const arr = s.split('')
//     const a = []
//     for (let i = 0; i < k; i++) {
//         a[i] = arr[i]
//     }
//     a.reverse()
//     arr.splice(0, k)
//     const c = a.concat(...arr)
//     return c.join('')
// };
// reverseStr('abcdefg', 2)
// var findDisappearedNumbers = function (nums) {
//     const len = nums.length
//     let l = 1
//     let i = 0

//     while (l <= nums.length) {

//     }
// };
// findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
// findDisappearedNumbers([1, 1])

// var findMedianSortedArrays = function (nums1, nums2) {
//     const arr = nums1.concat(...nums2)
//     arr.sort((a, b) => a - b)
//     let n = 0
//     if (arr.length % 2 === 0) {
//         n = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
//     } else {
//         n = arr[Math.ceil(arr.length / 2 - 1)]
//     }
//     console.log(n.toFixed(5));
// };
// findMedianSortedArrays([1, 3], [2])
// findMedianSortedArrays([1, 2], [3, 4])
// var findNumbers = function (nums) {
//     let n = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (String(nums[i]).length % 2 === 0) {
//             n++
//         }
//     }
//     console.log(n);
// };
// findNumbers([12, 345, 2, 6, 7896])
// findNumbers([555, 901, 482, 1771])
// var relativeSortArray = function (arr1, arr2) {
//     let n = 0
//     let l = 0
//     const arr = []
//     // debugger
//     while (n < arr2.length) {
//         if (!arr1[l] && arr1[l] !== 0) {
//             l++
//             continue
//         }
//         if (arr1[l] === arr2[n]) {
//             arr.push(arr1[l])
//             arr1.splice(l, 1)
//             l--
//         }
//         l++
//         if (l >= arr1.length) {
//             l = 0
//             n++
//         }
//     }
//     arr1.sort((a, b) => a - b)

//     console.log(arr.concat(...arr1));
// };
// relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
// relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])
// relativeSortArray([2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31],
// [2, 42, 38, 0, 43, 21])

// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false
//     const arr1 = s.split('')
//     const arr2 = t.split('')
//     let l = 0
//     let n = 0
//     console.log([...s].sort().join(''));
//     console.log([...t].sort().join(''));
// };
// isAnagram('anagram', 'nagaram')
// isAnagram('rat', 'car')

// var isSubsequence = function (s, t) {
//     let n = 0
//     let l = 0
//     const arr = t.split('')
//     debugger
//     while (n < s.length) {
//         if (s[n] === arr[l]) {
//             arr.splice(l, 1)
//             n++
//             l = 0
//         }
//         l++
//         if (l > arr.length) {
//             console.log(false);
//             return false
//         }
//     }
//     console.log(true);
//     return true
// };
// // isSubsequence('abc', 'ahbgdc')
// // isSubsequence('axc', 'ahbgdc')
// isSubsequence("acb", "ahbgdc")

// var countOperations = function (num1, num2) {
//     let n = 0
//     while (num1 !== 0 && num2 !== 0) {
//         if (num1 >= num2) {
//             num1 = num1 - num2
//         } else {
//             num2 = num2 - num1
//         }
//         n++
//     }
//     console.log(n);
// };
// countOperations(2, 3)
// countOperations(10, 10)
// var minimumOperations = function (nums) {
//     if (nums.length < 3) return 0
//     let n = 0
//     let l = 0
//     let c = 1
//     let r = 2
//     while (r < nums.length) {
//         if (nums[l] === nums[c]) {
//             nums[c]++
//             n++
//             continue
//         }
//         if (!nums[r] || nums[r] === nums[l]) {
//             l++
//             c++
//             r++
//             continue
//         }
//         nums[r] = nums[l]
//         n++
//         l++
//         c++
//         r++
//     }
//     console.log(nums);
//     console.log(n);
// };
// // minimumOperations([3, 1, 3, 2, 4, 3])
// // minimumOperations([1, 2, 2, 2, 2])
// minimumOperations([69, 91, 47, 74, 75, 94, 22, 100, 43, 50, 82, 47, 40, 51, 90, 27, 98, 85, 47, 14, 55, 82, 52, 9, 65, 90, 86, 45, 52, 52, 95, 40, 85, 3, 46, 77, 16, 59, 32, 22, 41, 87, 89, 78, 59, 78, 34, 26, 71, 9, 82, 68, 80, 74, 100, 6, 10, 53, 84, 80, 7, 87, 3, 82, 26, 26, 14, 37, 26, 58, 96, 73, 41, 2, 79, 43, 56, 74, 30, 71, 6, 100, 72, 93, 83, 40, 28, 79, 24])


// var singleNonDuplicate = function (nums) {
//     if (nums[0] !== nums[1]) return nums[0]
//     if (nums[nums.length - 1] !== nums[nums.length - 2]) return nums[nums.length - 1]
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
//             console.log(nums[i])
//             return nums[i]
//         }
//     }
// };
// singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])
// singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])

// var hammingWeight = function (n) {
//     const arr = n.toString(2).split('')
//     let num = 0
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== '0') {
//             num++
//             a.push(arr[i])
//         }
//     }
//     console.log(num);
//     console.log(a);
//     return num
// };
// hammingWeight(00000000000000000000000000001011)
// hammingWeight(00000000000000000000000010000000)
// hammingWeight(11111111111111111111111111111101)

// var canConstruct = function (ransomNote, magazine) {
//     const arr2 = magazine.split('')
//     const arr1 = ransomNote.split('')
//     let l = 0
//     let r = 0
//     const n = []
//     while (l < arr1.length) {
//         if (arr1[l] === arr2[r]) {
//             l++
//             n.push(arr2[r])
//             arr2.splice(r, 1)
//             r = 0
//         } else {
//             r++
//         }

//         if (r >= arr2.length) {
//             r = 0
//             l++
//         }
//     }
// return n.join('') === arr1.join('')
// };
// canConstruct('a', 'b')
// canConstruct('aa', 'ab')
// canConstruct('aa', 'aab')
// canConstruct('aa', 'baab')
// canConstruct('aab', 'baa')

// var removeDuplicates = function (s) {
//     const arr = s.split('')
//     let l = 0
//     let n = []
//     while (l < arr.length) {
//         n.push(arr[l])
//         if (n[n.length - 1] === n[n.length - 2]) {
//             n.splice(n.length - 2, 2)
//         }
//         l++
//     }
//     console.log(n.join(''));

// };
// removeDuplicates('abbaca')

// let foo = function (str) {
//     const arr = str.split('')
//     const obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] == undefined) {
//             obj[arr[i]] = 1
//         } else {
//             obj[arr[i]]++
//         }
//     }
//     let n = []
//     for (const key in obj) {
//         if (n.length === 0) {
//             n[0] = key
//             n[1] = obj[key]
//         }

//         if (n[1] < obj[key]) {
//             n[0] = key
//             n[1] = obj[key]
//         }
//     }
//     console.log(n[0]);
//     return n[0]
// }
// // foo('aab')
// foo('abcabcaa')

// var numIdenticalPairs = function (nums) {
//     let n = 0
//     let l = 0
//     let j = 1
//     while (l < nums.length) {
//         if (nums[l] === nums[j]) {
//             n++
//         }
//         j++
//         if (j >= nums.length) {
//             l++
//             j = l + 1
//         }
//     }
//     console.log(n);
// };
// numIdenticalPairs([1, 2, 3, 1, 1, 3])
// numIdenticalPairs([1, 1, 1, 1])
// numIdenticalPairs([1, 2, 3])

// var minCount = function (coins) {
//     let n = 0
//     for (let i = 0; i < coins.length; i++) {
//         if (coins[i] % 2 === 0) {
//             n += coins[i] / 2
//             coins.splice(i, 1)
//             i--
//         } else {
//             n += Math.floor(coins[i] / 2)
//             coins[i] = coins[i] - Math.floor(coins[i] / 2)
//         }
//     }
//     return n + coins.length
// };
// minCount([4, 2, 1])
// minCount([2, 3, 10])
// var twoSum = function (nums, target) {
//     let l = 0
//     let r = 1
//     while (l < nums.length) {
//         if (target - nums[l] === nums[r]) {
//             console.log([l, r]);
//             return [l, r]
//         }
//         r++
//         if (r >= nums.length) {
//             l++
//             r = l + 1
//         }
//     }

// };
// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 2, 4], 6)
// twoSum([3, 3], 6)
// var isPowerOfTwo = function (n) {
//     while (n % 2 === 0 || n === 1) {
//         if (n === 1) {
//             return true
//         }
//         if (n % 2 === 0) {
//             n = n / 2
//         } else {
//             return false
//         }
//     }
//     return false
// };
// isPowerOfTwo(16)
// isPowerOfTwo(5)
// var isPowerOfFour = function (n) {
//     if (!n) return false
//     if (n === 1 || n === 4) return true
//     let l = 4
//     while (l <= n / 4) {
//         if (l * 4 === n) return true
//         l = l * 4
//     }
//     return false
// };
// var prefixCount = function (words, pref) {
//     let len = pref.length
//     let n = 0
//     debugger
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].split('').splice(0, len).join('')
//         if (words[i] === pref) {
//             n++
//         }
//     }
//     console.log(n);
// };
// prefixCount(["pay", "attention", "practice", "attend"], 'at')
// var minimalKSum = function (nums, k) {
//     let o = 1
//     let n = 1
//     let l = 0
//     let all = 0
//     nums.sort((a, b) => a - b)
//     // debugger
//     while (o <= k || l < nums.length) {
//         if (o > k) break
//         if (nums[l] !== n) {
//             all += n
//             o++
//         } else {
//             if (nums[l] === nums[l + 1]) {
//                 n--
//             }
//             l++
//         }
//         n++
//     }
//     console.log(all);
// };
// minimalKSum([1, 4, 25, 10, 25], 2)
// minimalKSum([5, 6], 6)
// minimalKSum(

//     [96, 44, 99, 25, 61, 84, 88, 18, 19, 33, 60, 86, 52, 19, 32, 47, 35, 50, 94, 17, 29, 98, 22, 21, 72, 100, 40, 84],
//     35
// )

// var findContentChildren = function (g, s) {
//     let n = 0
//     g.sort((a, b) => a - b)
//     s.sort((a, b) => a - b)
//     let g1 = 0
//     let s1 = 0
//     while (g1 < g.length) {
//         if (g[g1] <= s[s1]) {
//             n++
//             g.splice(g1, 1)
//             s.splice(s1, 1)
//         } else {
//             s1++
//         }
//         if (s1 >= s.length) {
//             s1 = 0
//             g1++
//         }
//     }
//     console.log(n);
// };
// findContentChildren([1, 2, 3], [1, 1])
// findContentChildren([1, 2], [1, 2, 3])
// var removeDuplicates = function (nums) {
//     let l = 0
//     let r = 1
//     while (r < nums.length) {
//         if (nums[l] === nums[r] && nums[r] === nums[r + 1]) {
//             nums.splice(r + 1, 1)
//             l--
//             r--
//         }
//         l++
//         r++
//     }
//     console.log(nums);
//     console.log(nums.length);
// };
// removeDuplicates([1, 1, 1, 2, 2, 3])
// removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])
// var singleNumbers = function (nums) {
//     nums.sort((a, b) => a - b)
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i + 1] && nums[i - 1] !== nums[i]) {
//             arr.push(nums[i])
//         }
//     }
//     console.log(arr);
// };
// singleNumbers([4, 1, 4, 6])
// singleNumbers([1, 2, 10, 4, 1, 4, 3, 3])

// var singleNumber = function (nums) {
//     let l = 0
//     let r = 1
//     nums.sort((a, b) => a - b)
//     if (nums[0] !== nums[1]) return nums[0]
//     if (nums[nums.length - 2] !== nums[nums.length - 1]) return nums[nums.length - 1]
//     while (r < nums.length) {
//         if (nums[l] !== nums[r] && nums[r + 1] !== nums[l]) {
//             console.log(nums[r]);
//             return nums[r]
//         }
//         l++
//         r++
//     }
// };
// singleNumber([3, 4, 3, 3])
// singleNumber([4, 10, 4, 10, 2, 4, 10])
// singleNumber([5, 2, 2, 2, 5, 5, 4])
// var findMaxConsecutiveOnes = function (nums) {
//     let n = 0
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]) {
//             arr[n] = arr[n] ? arr[n] + 1 : 1
//         } else {
//             if (!arr[n]) arr[n] = 0
//             n++
//         }
//     }
//     console.log(arr.length ? Math.max(...arr) : 0);
//     return arr.length ? Math.max(...arr) : 0
// };
// findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
// findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])
// findMaxConsecutiveOnes([0, 0])
// findMaxConsecutiveOnes([0, 1])
// var addDigits = function (num) {
//     while (num > 9) {
//         const arr = String(num).split('')
//         let n = 0
//         for (let i = 0; i < arr.length; i++) {
//             n = n + Number(arr[i])
//         }
//         num = n
//     }
//     console.log(num);
// };
// addDigits(38)
// var maxPower = function (s) {
//     const arr = s.split('')
//     let l = 0
//     let r = 1
//     let n = 1
//     let old = []
//     while (l < arr.length) {
//         if (arr[l] === arr[r]) {
//             n++
//             r++
//             continue
//         }
//         old.push(n)
//         l++
//         r = l + 1
//         n = 1
//     }
//     // console.log(old);
//     console.log(Math.max(...old));
// };
// maxPower('leetcode')
// maxPower('abbcccddddeeeeedcba')
// maxPower('triplepillooooow')
// maxPower('hooraaaaaaaaaaay')
// maxPower('tourist')

// var findKDistantIndices = function (nums, key, k) {
//     const ke = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === key) {
//             ke.push(i)
//         }
//     }
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < ke.length; j++) {
//             if (Math.abs(i - ke[j]) <= k) {
//                 arr.push(i)
//                 break
//             }
//         }
//     }
//     console.log(arr);
// };
// findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)
// findKDistantIndices([2, 2, 2, 2, 2], 2, 2)

// var isPowerOfThree = function (n) {
//     if (n === 2 || n <= 0) return false
//     while (n > 1) {
//         if (Number.isInteger(n / 3)) {
//             n = n / 3
//         } else {
//             return false
//         }
//     }
//     return true
// };
// isPowerOfThree(6)

// var guess = function (n) {
//     if (n > 6) {
//         return 1
//     } else if (n < 6) {
//         return -1
//     } else {
//         return 0
//     }
// }
// var guessNumber = function (n) {
//     n = Math.ceil(n / 2)
//     while (n >= 0) {
//         if (guess(n) === 0) {
//             console.log(n);
//             return n
//         }
//         if (guess(n) === 1) {
//             n = Math.ceil(n / 2)
//         }
//         if (guess(n) === -1) {
//             const a = n
//             n = a + Math.ceil(n / 2)
//         }
//     }

// };
// guessNumber(10)

// var replaceSpaces = function (S, length) {
//     const arr = S.split('')
//     let str = ''
//     for (let i = 0; i < arr.length; i++) {
//         str = str + (arr[i] !== ' ' ? arr[i] : '%20')
//     }
//     console.log(str);
//     return str
// };
// replaceSpaces("Mr John Smith    ", 13)

// var xorOperation = function (n, start) {
//     const arr = []
//     for (let i = 0; i < n; i++) {
//         arr[i] = start + 2 * i
//     }
//     let res = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         res = res ^ arr[i]
//     }
//     console.log(res);
// };
// xorOperation(5, 0)
// xorOperation(4, 3)
// xorOperation(1, 7)
// xorOperation(10, 5)

// var dominantIndex = function (nums) {
//     if (nums.length === 1) return nums[0]
//     const big = [nums[0], 0]
//     const bigTwo = []
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > big[0]) {
//             big[0] = nums[i]
//             big[1] = i
//         }
//     }
//     nums.splice(big[1], 1)
//     bigTwo[0] = nums[0]
//     bigTwo[1] = 0
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > bigTwo[0]) {
//             bigTwo[0] = nums[i]
//             bigTwo[1] = i
//         }
//     }
//     console.log(big[0] >= (bigTwo[0] * 2) ? big[1] : -1);
//     return big[0] >= (bigTwo[0] * 2) ? big[1] : -1
// };
// dominantIndex([3, 6, 1, 0])
// dominantIndex([1, 2, 3, 4])
// dominantIndex([1])
// var buildArray = function (target, n) {
//     let s = 1
//     const arr = []
//     for (let i = 0; i < n; i++) {
//         if (target[i] === s) {
//             arr.push('Push')
//         } else if (target[i] !== undefined) {
//             arr.push('Push', 'Pop')
//             --i
//         }
//         s++
//     }
//     console.log(arr);

// };
// buildArray([1, 3], 3)
// buildArray([1, 2, 3], 3)
// buildArray([1, 2], 4)
// buildArray([2, 3, 4], 4)
// var shortestToChar = function (s, c) {
//     const arr = s.split('')
//     const res = []
//     let n = 0//记录上一个c的位置
//     // 先赋值0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === c) res[i] = 0
//     }
//     // 找到第一个0的位置，即给n设置默认值
//     for (let i = 0; i < res.length; i++) {
//         if (res[i] === 0) {
//             n = i
//             break
//         }
//     }
//     let l = 0
//     let r = 0
//     while (r < arr.length) {
//         // 当r是0的下标时
//         if (res[r] === 0) {
//             // 边界处理，是不是第一个n，不是的话，计算两个l在两0直接的最小值
//             if (r !== n) {
//                 res[l] = Math.abs(n - l) < Math.abs(l - r) ? Math.abs(n - l) : Math.abs(l - r)
//             } else {
//                 // 如果是第一个n的话，直接写入
//                 res[l] = Math.abs(l - r)
//             }
//             l++
//             if (l >= r) {
//                 l = r
//                 n = r
//                 r++
//             }
//         } else {
//             // 边界处理，判断是不是最后一个n，是的话，就对l一个个写入
//             if (r === arr.length - 1) {
//                 ++l
//                 res[l] = Math.abs(l - n)
//                 if (r === l) r++
//             } else {
//                 r++
//             }
//         }
//     }
//     console.log(res)
// };
// shortestToChar('loveleetcode', 'e')
// shortestToChar('aaab', 'b')
// shortestToChar("aaba", "b")
// shortestToChar("baaa", "b")

// var checkIfExist = function (arr) {
//     let l = 0
//     let r = 0
//     while (l < arr.length) {
//         if (arr[l] === arr[r] * 2 && l !== r) {
//             console.log(true)
//             return true
//         }
//         r++
//         if (r >= arr.length) {
//             l++
//             r = 0
//         }
//     }
//     console.log(false);
//     return false
// };
// checkIfExist([10, 2, 5, 3])
// checkIfExist([7, 1, 14, 11])
// checkIfExist([3, 1, 7, 11])
// var search = function (nums, target) {
//     let l = 0
//     let end = nums.length - 1

//     while (l <= end) {
//         let mid = l + Math.floor((end - l) / 2)
//         if (target === nums[mid]) {
//             console.log(nums[mid]);
//             return mid
//         } else if (target > nums[mid]) {
//             l = mid - 1
//         } else if (target < nums[mid]) {
//             l = mid + 1
//         }
//     }
//     console.log(-1)
//     return -1
// };
// search([4, 5, 6, 7, 0, 1, 2], 0)

// var targetIndices = function (nums, target) {
//     const arr = nums
//     nums.sort((a, b) => a - b)
//     const a = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) a.push(i)
//     }
//     console.log(a);
// };
// targetIndices([1, 2, 5, 2, 3], 2)
// targetIndices([1, 2, 5, 2, 3], 3)
// targetIndices([1, 2, 5, 2, 3], 5)
// targetIndices([1, 2, 5, 2, 3], 4)
// intersect([4, 9, 5], [9, 4, 9, 8, 4])

// var countHillValley = function (nums) {
//     let l = 0
//     let c = 1
//     let r = 2
//     let n = 0
//     // debugger
//     while (l < nums.length) {
//         if ((nums[c] > nums[r] && nums[c] > nums[l]) || (nums[c] < nums[r] && nums[c] < nums[l])) {
//             n++
//             l++
//             c++
//             r = c + 1
//         }
//         else if ((nums[c] > nums[l] && nums[c] === nums[r]) || (nums[c] < nums[l] && nums[c] === nums[r])) {
//             r++
//         }
//         else {
//             l++
//             c++
//             r = c + 1
//         }
//     }
//     console.log(n)
// };
// countHillValley([2, 4, 1, 1, 6, 5])
// countHillValley([6, 6, 5, 5, 4, 1])
// var countCollisions = function (directions) {
//     const arr = directions.split('')
//     let n = 0
//     while (arr[0] === 'L') {
//         arr.splice(0, 1)
//     }
//     while (arr[arr.length - 1] === 'R') {
//         arr.splice(arr.length - 1, 1)
//     }
//     if (arr.length === 0) {
//         console.log(0)
//         return 0
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'R' && arr[i + 1] === 'L') {
//             n += 2
//             arr[i] = arr[i + 1] = 'S'
//         }
//         if (arr[i] === 'S' && arr[i + 1] === 'R') {
//             n++
//             arr[i + 1] = 'S'
//         }
//     }
//     for (let i = arr.length; i >= 0; i--) {
//         if (arr[i] === 'L' && arr[i - 1] === 'R') {
//             n += 2
//             arr[i] = arr[i - 1] = 'S'
//         }
//         if (arr[i] === 'S' && arr[i - 1] === 'L') {
//             n++
//             arr[i - 1] = 'S'
//         }
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] !== 'S') {
//             arr[i] = 'S '
//             n++
//         }
//     }
//     console.log(arr, n);
// };
// countCollisions('RLRSLL')//5
// countCollisions('LLRRL')//3
// countCollisions('LLRR')//0
// countCollisions('LLRLRLLSLRLLSLSSSS')//10
// countCollisions('LLLL')
// countCollisions('RRR')

// 冒泡排序
// let maopao = (nums) => {
//     //先看第二层，这是第一层，第二层每次都能得出最后一个是最大的数，所有，每次只需要执行n-1次，即n*(n-1)/2
//     for (let j = nums.length; j >= 0; --j) {
//         // 第二层：依次进行相邻两个比较大小互换
//         for (let i = 0; i < j; i++) {
//             if (nums[i] > nums[i + 1]) {
//                 let temp = nums[i]
//                 nums[i] = nums[i + 1]
//                 nums[i + 1] = temp
//                 console.log(nums);
//             }
//         }
//     }
// }
// maopao([5, 3, 4, 1, 2])
// 选择排序
// let xuanze = (nums) => {
//     for (let i = 0; i < nums.length - 1; i++) {
//         let min = i
//         // 外层记录当前的下标值，然后内层循环比较大小，拿到最小的
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[min] > nums[j]) min = j

//         }
//         // 内层循环拿到最小的下标值，跟外层的依次替换
//         let temp = nums[i]
//         nums[i] = nums[min]
//         nums[min] = temp
//         console.log(nums)
//     }
// }
// xuanze([5, 3, 4, 1, 2])
//插入排序
// let charu = (nums) => {
//     for (let i = 1; i < nums.length; i++) {
//         let temp = nums[i]
//         let l = i
//         // 如果大于，向右移
//         while (nums[l - 1] > temp && l >= 0) {
//             nums[l] = nums[l - 1]
//             l--
//         }
//         // 当全部移完后，插入
//         nums[l] = temp
//         console.log(nums)
//     }
// }
// charu([4, 2, 5, 3, 1])
// 希尔(shell)排序，（即间隔排序,进阶版插入排序）
// let xier = (nums) => {
//     let gap = Math.floor(nums.length / 2)
//     while (gap >= 1) {
//         // 这里插入排序
//         // debugger
//         for (let i = gap; i < nums.length; i++) {
//             let temp = nums[i]
//             let l = i
//             while (nums[l - gap] > temp && l > gap - 1) {
//                 nums[l] = nums[l - gap]
//                 l -= gap
//             }
//             nums[l] = temp
//             console.log(nums);
//         }
//         console.log(`----------------------------以上是间隔  ${gap}  ---------------------`)
//         // 每次循环后，再/2
//         gap = Math.floor(gap / 2)
//     }
// }
// xier([5, 3, 6, 4, 1, 2])
// 快速排序,思路(半成品，失败品链接b站why算法倒数第二个视频)
// 1.枢纽，先选择第一个，最后一个，和中间那个，取个中位数，其次进行三者交换位置,再次把中位数置换到r的前一个数字，最后返回r-1
// 2.递归
// let kuaipai = (nums) => {
//     // 1. 枢纽
//     const median = (l, r) => {
//         let c = Math.floor((l + r) / 2)
//         if (nums[l] > nums[r]) {
//             const temp = nums[r]
//             nums[r] = nums[l]
//             nums[l] = temp
//         }
//         if (nums[l] > nums[c]) {
//             const temp = nums[c]
//             nums[c] = nums[l]
//             nums[l] = temp
//         }
//         if (nums[c] > nums[r]) {
//             const temp = nums[r]
//             nums[r] = nums[c]
//             nums[c] = temp
//         }

//         // 放到r的前一位
//         const temp = nums[c]
//         nums[c] = nums[r - 1]
//         nums[r - 1] = temp
//         // if (l === c && c + 1 === r) {
//         //     if (nums[c] > nums[r]) {
//         //         const temp = nums[c]
//         //         nums[c] = nums[r]
//         //         nums[r] = temp
//         //     }
//         // }

//         return nums[r - 1]
//     }
//     const main = (l, r) => {
//         // 1. 退出递归
//         if (l >= r) return
//         // 2.获取枢纽
//         let p = median(l, r)
//         let left = l
//         let right = r - 1
//         const a = nums
//         while (left < right) {
//             // 左指针找到一个比p大的数
//             while (nums[++left] < p) { }
//             // 右指针找到一个比p小的数
//             while (nums[--right] > p) { }
//             // 然后两个数互换位置
//             if (left < right) {
//                 let temp = nums[left]
//                 nums[left] = nums[right]
//                 nums[right] = temp
//             } else {
//                 break
//             }
//         }
//         // 当指针要越界时，即left>right，p与left+1互换
//         if (nums[left + 1] < nums[left]) {
//             let temp = nums[left + 1]
//             nums[left + 1] = nums[left]
//             nums[left] = temp
//         }
//         console.log('------------------枢纽确定: ' + p, nums)
//         // 分治
//         main(l, left - 1)
//         main(left + 1, r)

//     }
//     main(0, nums.length - 1)
//     console.log('____________________________________________________________________________我是最后答案', nums)
// }
// kuaipai([40, 5, 17, 3, 23, 10, 66, 12])
// // kuaipai([12, 5, 17, 3, 10])
// [40, 5, 17, 3, 23, 10, 66, 12]
// // 枢纽一次,我们找到p是23
// [12, 5, 17, 3, 66, 10, 23, 40]
// // 遇到left比p大，right比p小，两个数互换
// [12, 5, 17, 3, 10, 66, 23, 40]
// // 遇到left和right同一个退出while(true),然后left + 1与p互换
// [12, 5, 17, 3, 10, 23, 66, 40]
// // 这下可以确定23的位置是固定的，可以进行23前面的数组递归，后面的也进行递归
// kuaipai([7, 8, 2, 1, 3, 4, 9, 5, 6])
// [7, 8, 2, 1, 3, 4, 9, 5, 6]
// [3, 8, 2, 1, 6, 4, 9, 5, 7]
// [3, 8, 2, 1, 5, 4, 9, 6, 7]
// [3, 4, 2, 1, 5, 8, 9, 6, 7]
// [3, 4, 2, 1, 5, 6, 8, 9, 7]//枢纽确定6
// [2, 4, 3, 1, 5, 6, 8, 9, 7]
// [2, 4, 1, 3, 5, 6, 8, 9, 7]
// [2, 1, 4, 3, 5, 6, 8, 9, 7]
// [2, 1, 3, 4, 5, 6, 8, 9, 7]//枢纽确定3
// [1, 2, 3, 4, 5, 6, 8, 9, 7]//-----------左边已完成
// [1, 2, 3, 4, 5, 6, 7, 9, 8]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


// var maxArea = function (height) {
//     const arr = []
//     let l = 0
//     let r = height.length - 1
//     while (l < r) {
//         let h = height[r] > height[l] ? height[l] : height[r]
//         arr.push(h * (r - l))
//         if (height[l] > height[r]) {
//             r--
//         } else {
//             l++
//         }
//     }
//     console.log(Math.max(...arr))
// };
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// maxArea([1, 1])

// var pivotIndex = function (nums) {
//     let l = 1
//     let lAll = nums[0]
//     let rAll = 0
//     for (let i = 1; i < nums.length; i++) {
//         rAll += nums[i]
//     }
//     // 边界判断,第一个
//     if (rAll === 0) return 0
//     while (l < nums.length) {
//         rAll -= nums[l]
//         if (lAll === rAll) {
//             return l
//         }
//         lAll += nums[l]
//         l++
//     }
//     return -1
// };
// pivotIndex([1, 7, 3, 6, 5, 6])
// pivotIndex([1, 2, 3])
// pivotIndex([2, 1, -1])
// pivotIndex([1, -1, 2])
// pivotIndex([-1, -1, 1, 1, 0, 0])

// var minimumSum = function (num) {
//     const arr = String(num).split('')
//     arr.sort((a, b) => b - a)
//     return Number(arr[arr.length - 1] + arr[0]) + Number(arr[2] + arr[1])
// };
// minimumSum(2932)
// minimumSum(4009)

// var pivotArray = function (nums, pivot) {
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < pivot) arr.push(nums[i])
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === pivot) arr.push(nums[i])
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > pivot) arr.push(nums[i])
//     }
// };
// pivotArray([9, 12, 5, 10, 14, 3, 10], 10)
// pivotArray([-3, 4, 3, 2], 2)
// pivotArray([4, 0, 4, 5, -11], 5)
// pivotArray([4, 0, 4, 5, -11], 4)

// var sumNums = function (n) {
//     debugger
//     function foo(n) {
//         if (n === 1) return 1
//         return foo(n - 1) + n
//     }
//     foo(n)
//     // console.log(foo(n))
// }
// sumNums(3)
// 差集
// var findDifference = function (nums1, nums2) {
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => a - b)
//     const n1 = [...new Set(nums1)]
//     const n2 = [...new Set(nums2)]
//     let l = 0
//     let r = 0
//     while (l < n1.length && r < n2.length) {
//         if (n1[l] < n2[r]) {
//             l++
//             continue
//         }
//         if (n1[l] > n2[r]) {
//             r++
//             continue
//         }
//         if (n1[l] === n2[r]) {
//             n1.splice(l, 1)
//             n2.splice(r, 1)
//         }
//     }
//     console.log(n1, n2)
// };
// findDifference([1, 2, 3], [2, 4, 6])
// findDifference([1, 2, 3, 3], [1, 1, 2, 2])
// findDifference([80, 5, -20, 33, 26, 29], [-69, 0, -36, 52, -84, -34, -67, -100, 80])
// var minDeletion = function (nums) {
//     let n = 0
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (i % 2 === 0) {
//             if (nums[i] === nums[i + 1] || i + 1 === nums.length) {
//                 nums.splice(i, 1)
//                 n++
//             }
//         }
//     }
//     if (nums.length % 2 !== 0) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === nums[i + 1] && i % 2 !== 0) {
//                 nums.splice(i, 1)
//                 n++
//             }
//         }
//     }
//     console.log(n, nums)
// };
// minDeletion([1, 1, 2, 3, 5])
// minDeletion([1, 1, 2, 2, 3, 3])
// minDeletion([8])
// 自己写的方法一
// var dailyTemperatures = function (temperatures) {
//     let l = 0
//     let r = 1
//     let arr = []
//     arr[temperatures.length - 1] = 0
//     while (l < temperatures.length - 1) {
//         if (temperatures[l] < temperatures[r]) {
//             arr[l] = r - l
//             l++
//             r = l + 1
//             continue
//         } else if (temperatures[l] >= temperatures[r]) {
//             r++
//         }
//         if (r >= temperatures.length) {
//             arr[l] = 0
//             l++
//             r = l + 1
//         }
//     }
//     console.log(arr)
// };
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// dailyTemperatures([30, 40, 50, 60])
// dailyTemperatures([30, 60, 90])
// dailyTemperatures([2, 3, 4])
// dailyTemperatures([4, 4, 4, 5, 3, 2])
// dailyTemperatures([77, 77, 77, 77, 77, 41, 77, 41, 41, 77])
// var minAddToMakeValid = function (s) {
//     const arr = s.split('')
//     let l = 1
//     const stack = []
//     stack.push(arr[0])
//     while (l < arr.length) {
//         stack.push(arr[l])
//         l++
//         if (stack[stack.length - 1] === ')' && stack[stack.length - 2] === '(') {
//             stack.pop()
//             stack.pop()
//         }
//     }
//     console.log(stack.length)
// };
// minAddToMakeValid('())')
// minAddToMakeValid('(((')
// minAddToMakeValid("()))((")
// var numOfPairs = function (nums, target) {
//     let l = 0
//     let r = 1
//     let n = 0
//     while (l < nums.length) {
//         if (nums[l] + nums[r] === target) {
//             n++
//         }
//         if (nums[r] + nums[l] === target) {
//             n++
//         }
//         r++
//         if (r >= nums.length) {
//             l++
//             r = l + 1
//         }
//     }
//     console.log(n)
// };
// numOfPairs(["777", "7", "77", "77"], '7777')
// numOfPairs(["123", "4", "12", "34"], '1234')
// numOfPairs(["1", "1", "1"], '11')

// var validateStackSequences = function (pushed, popped) {
//     const stack = []
//     let idx = 0
//     let n = 0
//     while (popped.length) {
//         if (popped[0] === stack[stack.length - 1]) {
//             stack.pop()
//             popped.splice(0, 1)
//         } else {
//             ++n
//             if (pushed.length * 2 === n) {
//                 console.log(false)
//                 return false
//             }
//             if (idx < pushed.length) stack.push(pushed[idx++])
//         }

//     }
//     console.log(true)
//     return true
// };
// validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])
// validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])
// validateStackSequences([2, 1, 0], [1, 2, 0])
// var findLonely = function (nums) {
//     nums.sort((a, b) => a - b)
//     console.log(nums)
//     let l = 0
//     let r = 1
//     // debugger
//     while (l < nums.length) {
//         if (
//             nums[r - 1] === nums[r] ||
//             nums[r - 1] + 1 === nums[r] ||
//             nums[r - 1] - 1 === nums[r]
//         ) {
//             r++
//         } else {
//             if (l + 1 === r) {
//                 l++
//             } else {
//                 nums.splice(l, r - l)
//             }
//             r = l + 1
//         }
//     }
//     console.log(nums)
// };
// var findLonely = function (nums) {
//     nums.sort((a, b) => a - b)
//     const arr = []
//     console.log(nums)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i + 1] && nums[i] + 1 !== nums[i + 1] && nums[i] - 1 !== nums[i + 1]
//             && nums[i] !== nums[i - 1] && nums[i] + 1 !== nums[i - 1] && nums[i] - 1 !== nums[i - 1]
//         ) {
//             arr.push(nums[i])
//         }
//     }
//     console.log(arr)
// };
// findLonely([10, 6, 5, 8])
// findLonely([1, 3, 5, 3])
// findLonely([1, 1, 1, 2, 5, 2, 22, 8, 9])
// findLonely([75, 35, 59, 66, 69, 53, 37, 16, 60, 98, 11, 33, 3, 85, 59, 65, 59, 44, 34, 89, 72, 47])
// findLonely([3, 11, 16, 33, 34, 35, 37, 44, 47, 53, 59, 59, 59, 60, 65, 66, 69, 72, 75, 85, 89, 98])

// var convertTime = function (current, correct) {
//     const ent = [current[0] + current[1], current[3] + current[4]]
//     const ect = [correct[0] + correct[1], correct[3] + correct[4]]
//     let n = 0
//     let l = 0
//     // debugger
//     while (l < ect.length) {
//         if (ent[l] === ect[l]) {
//             l++
//             continue
//         }
//         if (ect[0] > ent[0]) {
//             n = Number(ect[0]) - Number(ent[0])
//             ent[0] = ect[0]
//             l++
//             continue
//         }
//         if (ect[0] < ent[0]) {
//             n = Number(ect[0]) - Number(ent[0])
//             n = 24 - Number(ect[0]) + Number(ent[0])
//             ent[0] = ect[0]
//             l++
//             continue
//         }
//         let reduce = 0
//         if (ent[l] < ect[l]) {
//             reduce = ect[l] - ent[l]

//         } else if (ent[l] > ect[l]) {
//             n--
//             reduce = 60 - Number(ent[l]) + Number(ect[l])
//         } else {
//             return n
//         }
//         while (reduce > 0) {
//             if (reduce - 15 >= 0) {
//                 reduce = reduce - 15
//                 n++
//             } else if (reduce - 5 >= 0) {
//                 reduce = reduce - 5
//                 n++
//             } else {
//                 reduce = reduce - 1
//                 n++
//             }
//         }
//         l++
//     }
//     console.log(n)
// };
// convertTime('02:30', '04:35')
// convertTime('11:00', '11:01')

// var findWinners = function (matches) {
//     const arr = [[], []]
//     const obj = {}
//     for (let i = 0; i < matches.length; i++) {
//         if (obj[matches[i][0]] === undefined) {
//             obj[matches[i][0]] = 0
//         }
//         if (obj[matches[i][1]] === undefined) {
//             obj[matches[i][1]] = -1
//         } else if (obj[matches[i][1]] !== undefined) {
//             obj[matches[i][1]] = obj[matches[i][1]] - 1
//         }
//     }
//     console.log(obj)
//     for (const key in obj) {
//         if (obj[key] === 0) {
//             arr[0].push(Number(key))
//         } else if (obj[key] === -1) {
//             arr[1].push(Number(key))
//         }
//     }
//     arr[0].sort((a, b) => a - b)
//     arr[1].sort((a, b) => a - b)
//     console.log(arr)
// };
// findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]])
// findWinners([[2, 3], [1, 3], [5, 4], [6, 4]])


// //A-Z，65-90含
// //a-z，97-122含
// // arr[i].charCodeAt()//ascii转 数字
// // String.fromCharCode(n)//转ascii
// var arrangeWords = function (text) {
//     const arr = text.split(' ')
//     let n1 = arr[0].split('').splice(0, 1)[0]
//     let n = arr[0].split('').splice(1, arr[0].split('').length).join('')
//     arr[0] = String.fromCharCode(n1.charCodeAt() + 32) + n
//     arr.sort((a, b) => a.length - b.length)
//     console.log(arr)
//     n1 = arr[0].split('').splice(0, 1)[0]
//     n = arr[0].split('').splice(1, arr[0].split('').length).join('')
//     arr[0] = String.fromCharCode(n1.charCodeAt() - 32) + n
//     console.log(arr.join(' '))
//     return arr.join(' ')
// };
// arrangeWords('Leetcode is cool')
// var removeDuplicates = function (s, k) {
//     const arr = s.split('')
//     let l = 0
//     let r = 1
//     while (l < arr.length) {
//         if (arr[r - 1] === arr[r]) {
//             if (r - l + 1 === k) {
//                 arr.splice(l, k)
//                 l = r = 0
//             }
//             r++
//             continue
//         }
//         l++
//         r = l + 1
//     }
//     console.log(arr.join(''))
// };
// removeDuplicates('deeedbbcccbdaa', 3)
// removeDuplicates('abcd', 2)
// removeDuplicates('pbbcggttciiippooaais', 2)
// //A-Z，65-90含
// //a-z，97-122含
// // arr[i].charCodeAt()//ascii转 数字
// // String.fromCharCode(n)//转ascii
// var minSubArrayLen = function (target, nums) {
//     if (nums[0] === target) return 1
//     let l = 0
//     let r = 1
//     let num = nums[0]
//     let n = 0
//     // debugger
//     while (l < nums.length) {
//         num += nums[r]
//         if (num < target) {
//             r++
//             continue
//         }
//         if (num === target) {
//             n = n < r - l ? r - l : n
//         }
//         if (num > target) {
//             n = n < r - l ? r - l : n
//             num -= nums[l]
//             num -= nums[r]
//             l++
//         }
//     }
//     console.log(n)
//     return n
// };
// minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
// minSubArrayLen(4, [1, 4, 4])
// minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])
// minSubArrayLen(11, [1, 2, 3, 4, 5])
// var selfDividingNumbers = function (left, right) {
//     const arr = []
//     for (let i = left; i <= right; i++) {
//         let l = 0
//         const nums = String(i)
//         while (l < nums.length) {
//             if (i % nums[l] === 0) {
//                 l++
//                 if (l >= nums.length) {
//                     arr.push(i)
//                 }
//             } else {
//                 break
//             }
//         }
//     }
//     console.log(arr)
// };
// selfDividingNumbers(47, 85)

// var maximumProduct = function (nums) {
//     nums.sort((a, b) => a - b)
//     let n = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
//     let a = nums[0] * nums[1] * nums[nums.length - 1]
//     return n > a ? n : a
// };
// maximumProduct()
// var largestInteger = function (num) {
//     const arr = String(num).split('')
//     const o = []
//     const j = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             o.push(arr[i])
//             arr[i] = true
//         } else {
//             j.push(arr[i])
//             arr[i] = false
//         }
//     }
//     o.sort((a, b) => b - a)
//     j.sort((a, b) => b - a)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === true) {
//             arr[i] = o[0]
//             o.shift()
//         } else {
//             arr[i] = j[0]
//             j.shift()
//         }
//     }
//     console.log(Number(arr.join('')))
//     return Number(arr.join(''))
// };
// largestInteger(1234)
// largestInteger(65875)
// var maximumProduct = function (nums, k) {
//     while (k--) {
//         nums.sort((a, b) => a - b)
//         nums[0] += 1
//     }
//     let n = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         n = n * nums[i]
//     }
//     if (n >= 10 ** 9 + 7) {
//         console.log('%', n % (10 ** 9 + 7))
//         return n % (10 ** 9 + 7)
//     } else {
//         console.log('n', n)
//         return n
//     }

// };
// maximumProduct([0, 4], 5)
// maximumProduct([6, 3, 3, 2], 2)
// maximumProduct([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 1000)

// var intersect = function (nums1, nums2) {
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => a - b)
//     const arr = []
//     let l = 0
//     let r = 0
//     while (l < nums1.length && r < nums2.length) {
//         if (nums1[l] === nums2[r]) {
//             arr.push(nums1[l])
//             l++
//             r++
//         } else if (nums1[l] > nums2[r]) {
//             r++
//         } else {
//             l++
//         }
//     }
//     console.log(arr)
// };
// intersect([1, 2, 2, 1], [2, 2])
// intersect([4, 9, 5], [9, 4, 9, 8, 4])
// intersect([0, 2, 2, 3, 4, 4, 5, 7, 7], [1, 3, 6, 8, 9, 9])

// var maximumWealth = function (accounts) {
//     for (let i = 0; i < accounts.length; i++) {
//         let num = 0
//         for (let j = 0; j < accounts[i].length; j++) {
//             num += accounts[i][j]
//         }
//         accounts[i] = num
//     }
//     console.log(Math.max(...accounts))
// };
// maximumWealth([[1, 2, 3], [3, 2, 1]])
// maximumWealth([[1, 5], [7, 3], [3, 5]])
// maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])
// //A-Z，65-90含
// //a-z，97-122含
// // arr[i].charCodeAt()//ascii转 数字
// // String.fromCharCode(n)//转ascii


// var detectCapitalUse = function (word) {
//     if (word.length === 1) return true
//     const arr = word.split('')
//     // 第一个是小写
//     if (arr[0].charCodeAt() >= 97) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].charCodeAt() < 97) return false
//         }
//     } else {
//         // 第一个是大写
//         // 第二个是大写
//         if (arr[1].charCodeAt() < 97) {
//             for (let i = 1; i < arr.length; i++) {
//                 if (arr[i].charCodeAt() >= 97) return false
//             }
//         } else {
//             // 第二个是小写
//             for (let i = 1; i < arr.length; i++) {
//                 if (arr[i].charCodeAt() < 97) return false
//             }
//         }
//     }
//     return true
// };
// detectCapitalUse('USA')
// detectCapitalUse('leetcode')
// detectCapitalUse('Good')
// detectCapitalUse('GoGo')
// detectCapitalUse('G')

// var lastStoneWeight = function (stones) {
//     while (stones.length > 1) {
//         stones.sort((a, b) => b - a)
//         stones[0] = Math.abs(stones[0] - stones[1])
//         stones.splice(1, 1)
//     }
//     console.log(stones[0] ? stones[0] : 0)
// };
// lastStoneWeight([2, 7, 4, 1, 8, 1])

// var lemonadeChange = function (bills) {
//     const arr = [0, 0, 0]
//     // debugger
//     for (let i = 0; i < bills.length; i++) {
//         if (bills[i] === 5) {
//             arr[0] = arr[0] + 1
//         }
//         if (bills[i] === 10) {
//             arr[0] = arr[0] - 1
//             if (arr[0] === -1) {
//                 console.log(false)
//                 return false
//             }
//             arr[1] = arr[1] + 1
//         }
//         if (bills[i] === 20) {
//             if (arr[1] - 1 === -1) {
//                 if (arr[0] - 3 < 0) {
//                     console.log(false)
//                     return false
//                 }
//                 arr[0] = arr[0] - 3
//                 arr[2] = arr[2] + 1
//             } else {
//                 arr[1] = arr[1] - 1
//                 if (arr[0] - 1 < 0) {
//                     console.log(false)
//                     return false
//                 }
//                 arr[0] = arr[0] - 1
//                 arr[2] = arr[2] + 1
//             }
//         }
//     }
//     console.log(true)
//     return true
// };
// lemonadeChange([5, 5, 5, 10, 20])
// lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20])
// lemonadeChange([5, 5, 10, 10, 20])

// var isMonotonic = function (nums) {
//     if (nums[0] < nums[nums.length - 1]) {
//         let n = nums[0]
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i] < n) {
//                 console.log(false)
//                 return false
//             }
//             n = nums[i]
//         }
//     } else {
//         let n = nums[0]
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i] > n) {
//                 console.log(false)
//                 return false
//             }
//             n = nums[i]
//         }
//     }
//     console.log(true)
//     return true
// };
// isMonotonic([1, 2, 2, 3])
// isMonotonic([6, 5, 4, 4])
// isMonotonic([1, 3, 2])

// var findSpecialInteger = function (arr) {
//     if (arr.length === 1) return arr[0]
//     let stack = [arr[0]]
//     for (let i = 1; i < arr.length; i++) {
//         if (stack[stack.length - 1] === arr[i]) {
//             stack.push(arr[i])
//             if (stack.length >= Math.ceil(arr.length / 3.8)) {
//                 console.log(stack[0])
//                 return stack[0]
//             }
//         } else {
//             stack = []
//             stack.push(arr[i])
//         }
//     }
// };
// findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])//6
// findSpecialInteger([1, 2, 3, 3])//3,下一行是1
// findSpecialInteger([1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12])
// findSpecialInteger([1, 1, 2, 2, 3, 3, 3, 3])

// var replaceElements = function (arr) {
//     let l = 0
//     while (l < arr.length - 1) {
//         const temp = Math.max(...arr.slice(l + 1, arr.length))
//         arr[l] = temp
//         l++
//     }
//     arr[arr.length - 1] = -1
//     console.log(arr)
// };
// replaceElements([17, 18, 5, 4, 6, 1])
// replaceElements([400])


// var getNoZeroIntegers = function (n) {
//     let l = 0
//     while (n) {
//         n -= 1
//         l += 1
//         const ns = String(n).split('').findIndex(item => item == 0)
//         const ls = String(l).split('').findIndex(item => item == 0)
//         if (ns === -1 && ls === -1) {
//             console.log([n, l])
//             return [n, l]
//         }
//     }
// };
// getNoZeroIntegers(2)
// getNoZeroIntegers(11)
// getNoZeroIntegers(10000)
// getNoZeroIntegers(69)
// getNoZeroIntegers(1010)
// var uniqueOccurrences = function (arr) {
//     arr.sort((a, b) => a - b)
//     let num = 1
//     const a = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             num++
//         } else {
//             a.push(num)
//             num = 1
//         }
//     }
//     a.sort((c, b) => c - b)
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === a[i + 1]) {
//             console.log(false)
//             return false
//         }
//     }
//     console.log(true)
//     return true
// };
// uniqueOccurrences([1, 2, 2, 1, 1, 3])
// uniqueOccurrences([1, 2])
// uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])
// const dataFun = data => {
//     const allArr = []
//     let arr = []
//     for (let i = 0; i < data.length; i++) {
//         if (arr.length === 0) {
//             arr.push(data[i])
//             continue
//         }
//         if (arr[0].id === data[i].id) {
//             arr.push(data[i])
//         } else {
//             for (let j = 0; j < arr.length; j++) {
//                 for (let k = j + 1; k < arr.length; k++) {
//                     if (dateTime(arr[j].date_at) - dateTime(arr[k].date_at) > 0) {
//                         const temp = arr[j]
//                         arr[j] = arr[k]
//                         arr[k] = temp
//                     }
//                 }
//             }
//             allArr.push(...arr)
//             arr = []
//             arr.push(data[i])
//             if (data.length === i + 1) {
//                 allArr.push(data[i])
//                 arr = []
//             }
//         }
//     }
//     console.log(allArr)
// }
// const dateTime = time => {
//     return new Date(time).getTime()
// }
// const d = [
//     { id: '1001', date_at: '2022-06-03' },
//     { id: '1001', date_at: '2022-06-01' },
//     { id: '1001', date_at: '2022-06-02' },
//     { id: '1111', date_at: '2022-06-02' },
//     { id: '1002', date_at: '2022-06-03' },
//     { id: '1002', date_at: '2022-06-02' },
//     { id: '1002', date_at: '2022-06-01' },
//     { id: '1003', date_at: '2022-06-03' }
// ]
// dataFun(d)


// var massage = function(nums) {
//     if (!nums.length) return 0
//     let dp0 = 0 
//     let dp1 = nums[0] 
//     for (let i = 1; i < nums.length; i++) {
//         let r = dp0 + nums[i]
//         let c = Math.max(dp0, dp1)
//         dp0 = c
//         dp1 = r
//     }
//     console.log(Math.max(dp0, dp1));
//     return Math.max(dp0, dp1)
// };
// massage([1,2,3,1]) // 4
// massage([2,7,9,3,1]) // 12
// massage([2,1,4,5,3,1,1,3]) // 12

// var twoSum = function(nums, target) {
//     let l = 0
//     let r = nums.length - 1
//     while (l < r) {
//         if (nums[r] + nums[l] > target) {
//             r--
//         }else if (nums[r] + nums[l] < target) {
//             l++
//         } else {
//             console.log(r,[nums[r], nums[l]]);
//             return [nums[r], nums[l]]
//         }
//     }
// };
// twoSum([2,7,11,15], 9)
// twoSum([10,26,30,31,47,60], 40)

// var digitSum = function(s, k) {
//     if (s.length <= k) {
//         // console.log(s);
//         return s
//     }else {
//         const arr = s.split('')
//         let l = 0
//         let res = 0
//         let str = ''
//         let b = Math.floor(arr.length / k)
//         let toB = 0
//         for (let i = 0; i < arr.length; i++) {
//             ++l
//             res = res + Number(arr[i])
//             if (l === k || (toB === b && arr.length - 1 === i)) {
//                 str = str + String(res)
//                 l = 0
//                 res = 0
//                 ++toB
//             }
//         }
//         return digitSum(str, k)
//         // digitSum(str, k)
//     }
// };

// digitSum('11111222223', 3)
// digitSum('00000000', 3)

// var kthDistinct = function(arr, k) {
//     const obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]] = obj[arr[i]] + 1
//         } else {
//             obj[arr[i]] = 1
//         }
//     }
//     let l = 0
//     for (const key in obj) {
//         if (obj[key] === 1) {
//             ++l
//             if (l === k) {
//                 console.log(key)
//                 return key
//             } 
            
//         }
//     }
//     console.log('')
//     return ''
// };
// kthDistinct(["d","b","c","b","c","a"], 2)
// kthDistinct(["aaa","aa","a"], 1)
// kthDistinct(["a","b","a"], 3)

// var sumZero = function(n) {
//     if (n === 1) return [0]
//     const arr = []
//     let l = 1
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0) {
//             arr.push(l)
//         } else {
//             arr.push(-l)
//             l++
//         }
//     }
//     if (n % 2 !== 0) {
//         arr[arr.length - 1] = 0
//     }
//     console.log(arr);
//     return arr
// };
// sumZero(5)
// sumZero(3)
// sumZero(10)

// var firstUniqChar = function(s) {
//     if (!s.length) return ' '
//     const obj = {}
//     const arr = s.split('')
//     for (let i = 0; i < s.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]] = obj[arr[i]] + 1
//         } else {
//             obj[arr[i]] = 1
//         }
//     }
//     for (const key in obj) {
//         if (obj[key] === 1) {
//             console.log(key);
//             return key
//         }
//     }
//     return ' '
// };
// firstUniqChar('abaccdeff')

