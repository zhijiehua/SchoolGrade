let defaultMesg = ''

try {
  if (localStorage.mesg) {
    defaultMesg = localStorage.mesg
  }
} catch (e) {}

export default{
  mesg: defaultMesg,
  name: '一一'
}
