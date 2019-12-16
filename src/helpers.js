//so when we're typing our notes we dont want to update the database every keystroke. 
//this is a debalance function to make it so that it updates whenever the user stops typing.

export default function debounce(a,b,c,){
    var d,e;
    return function(){
        function h(){
            d=null;
            c||(e=a.apply(f,g));
        }
        var f=this,g=arguments;
        return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
}

//removes html tag bars from the side bar for the preview

export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
};