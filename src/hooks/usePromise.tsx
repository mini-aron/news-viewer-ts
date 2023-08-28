import { useState, useEffect } from "react";
export type PromiseCreator<T> = () => Promise<T>;


function usePromise<T>(promiseCreator: PromiseCreator<T>, deps: any[]) {
  // 대기중 / 완료  실패에 대한 상태관리
  const [loading, setLoading] = useState<boolean>(false);
  const [resolved, setResolved] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
}
export default usePromise;
